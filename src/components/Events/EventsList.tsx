import EventCard from "./EventCard.tsx";
import {useEventContext} from "../../hooks/useEventContext.ts";
import {useMemo} from "react";

const EventsList = () => {
    const {events} = useEventContext();

    const eventsToRender = useMemo(() => events.map(event => <EventCard event={event} key={event.id}/>), [events])

    return <>
        <div className="events">
            {eventsToRender}
        </div>
    </>
}

export default EventsList;