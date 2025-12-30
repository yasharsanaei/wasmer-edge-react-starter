import {EventLayoutModel} from "../../types.ts";
import {useMemo} from "react";

type EventCardProps = {
    event: EventLayoutModel
}

const EventCard = ({event}: EventCardProps) => {
    const layoutInfo = useMemo(() => {
        const left = ((event.column / event.columnCount) * 600) + 10;
        const width = 600 / event.columnCount;
        const top = event.start;
        const height = event.end - event.start;
        return {left, width, top, height};
    }, [event])
    return <>
        <div className="event-card"
             key={event?.start}
             style={{
                 left: `${layoutInfo.left}px`,
                 width: `${layoutInfo.width}px`,
                 top: `${layoutInfo.top}px`,
                 height: `${layoutInfo.height}px`
             }}>
            <h2>{event.title}</h2>
            <p>{event.location}</p>
        </div>
    </>
}

export default EventCard;