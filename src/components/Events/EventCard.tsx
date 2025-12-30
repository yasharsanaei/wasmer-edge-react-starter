import {EventLayoutModel} from "../../utils/event.model.ts";

type EventCardProps = {
    event: EventLayoutModel
}

const EventCard = ({event}: EventCardProps) => {
    const left = ((event.column / event.columnCount) * 600) + 10;
    const width = 600 / event.columnCount;
    const top = event.start;
    const height = event.end - event.start;
    return <>
        <div className="event-card"
             key={event?.start}
             style={{
                 left: `${left}px`,
                 width: `${width}px`,
                 top: `${top}px`,
                 height: `${height}px`
             }}>
            <h2>Title</h2>
            <p>An event from {event.start} to {event.end}</p>
        </div>
    </>
}

export default EventCard;