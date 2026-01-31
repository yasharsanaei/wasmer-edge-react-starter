import {EventLayoutModel} from "../../types.ts";
import {useMemo} from "react";

type EventCardProps = {
    event: EventLayoutModel
}

const EventCard = ({event}: EventCardProps) => {
    const layoutInfo = useMemo(() => {
        const left = ((event.column / event.columnCount) * 100);
        const width = 100 / event.columnCount;
        const top = event.start;
        const height = event.end - event.start;
        return {left, width, top, height};
    }, [event])
    return <>
        <div className="event-card"
             data-left={layoutInfo.left}
             data-width={layoutInfo.width}
             data-top={layoutInfo.top}
             data-height={layoutInfo.height}
             key={event?.start}>
            <h2>{event.title}</h2>
            <p>{event.location}</p>
        </div>
    </>
}

export default EventCard;