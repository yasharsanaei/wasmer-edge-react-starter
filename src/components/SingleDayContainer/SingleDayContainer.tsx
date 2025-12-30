import React from "react";
import EventsList from "../Events/EventsList.tsx";

const HOURS = new Array(25).fill(0).map((v, i) => v + (i * 30))

const SingleDayContainer = React.memo(() => {

    const hoursText = (timeValue: number) => {
        const hour = Math.floor((timeValue / 60)) + 9;
        const minutes = (timeValue % 60);
        return {
            hour: String(hour % 12 == 0 ? 12 : hour % 12),
            minutes: String(minutes || '00'),
            marker: minutes == 30 ? '' : hour < 12 ? 'AM' : 'PM'
        }
    }

    return <>
        <div className="container">
            <div className="timeline">
                {HOURS.map((item) => {
                    const {hour, minutes, marker} = hoursText(item);
                    return <div key={hour.concat(marker)} className="timeline-hour">{hour}:{minutes} <span>{marker}</span></div>
                })
                }
            </div>
            <EventsList/>
        </div>
    </>
})

export default SingleDayContainer;