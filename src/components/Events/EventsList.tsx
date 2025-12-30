import EventCard from "./EventCard.tsx";
import {useEventContext} from "../../hooks/useEventContext.ts";

const EventsList = () => {
    const {events} = useEventContext();

    return <>
        <div className="events">
            {events.map(event => <EventCard event={event} key={event.id}/>)}
        </div>
    </>
}

export default EventsList;