import React from "react";
import EventsList from "../Events/EventsList.tsx";

const HOURS = new Array(25).fill(0).map((v, i) => v + (i * 30))

const hoursText = (v: number) => {
    const h = Math.floor((v / 60)) + 9;
    const m = (v % 60);
    return {
        h: String(h % 12 == 0 ? 12 : h % 12),
        m: String(m || '00'),
        marker: m == 30 ? '' : h < 12 ? 'AM' : 'PM'
    }
}

const SingleDayContainer = React.memo(() => {
    return <>
        <div className="container">
            <div className="timeline">
                {HOURS.map((hour) => {
                    const {h, m, marker} = hoursText(hour);
                    return <div key={hour} className="timeline-hour">{h}:{m} <span>{marker}</span></div>
                })
                }
            </div>
            <EventsList/>
        </div>
    </>
})

export default SingleDayContainer;