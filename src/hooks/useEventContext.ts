import {EventContext, EventContextModel} from "../context/EventContext.ts";
import {EventLayoutModel, EventModel} from "../utils/event.model.ts";
import {useContext} from "react";

const createGroups = (events: EventModel[]) => {
    const sorted = [...events].sort((a, b) => a.start - b.start);

    const groups: EventModel[][] = [];
    let current: EventModel[] = [];
    let currentEnd = -1;

    for (const event of sorted) {
        if (event.start >= currentEnd) {
            if (current.length) groups.push(current);
            current = [event];
            currentEnd = event.end;
        } else {
            current.push(event);
            currentEnd = Math.max(currentEnd, event.end);
        }
    }

    if (current.length) groups.push(current);
    return groups;
}

const createColumns = (group: EventModel[]): EventLayoutModel[] => {
    const columns: number[] = []; // last end per column
    const result: EventLayoutModel[] = [];

    for (const event of group) {
        let col = columns.findIndex(end => event.start >= end);

        if (col === -1) {
            col = columns.length;
            columns.push(event.end);
        } else {
            columns[col] = event.end;
        }

        result.push({
            ...event,
            column: col,
            columnCount: 0 // temp
        });
    }

    const columnCount = columns.length;
    result.forEach(e => {
        e.columnCount = columnCount
        if (!e.id) e.id = crypto?.randomUUID();
        if (!e.title) e.title = "Sample Item"
        if (!e.location) e.location = "Sample Location"
    });
    return result;
}

export const createLayout = (events: EventModel[]): EventLayoutModel[] => {
    const groups = createGroups(events);

    return groups.flatMap(createColumns);
}

export const useEventContext = () => {
    const {events, setEvents} = useContext<EventContextModel>(EventContext);

    const updateEvents = (value: EventModel | EventModel[]) => {
        try {
            let events = [];
            const ignoredEvents: EventModel[] = [];
            const validEvents: EventModel[] = [];
            if (!Array.isArray(value)) {
                events = [value]
            } else {
                events = [...value]
            }
            for (const event of events) {
                if (event.start >= event.end) ignoredEvents.push(event);
                else if (typeof event.start === 'string' && Number.isNaN(parseInt(event.start))) ignoredEvents.push(event);
                else if (typeof event.end === 'string' && Number.isNaN(parseInt(event.end))) ignoredEvents.push(event);
                else validEvents.push(event);
            }
            setEvents(prev => createLayout([...prev, ...validEvents]));
            if (ignoredEvents.length) {
                console.error("Events that rejected: ", ignoredEvents);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return {events, updateEvents}
}