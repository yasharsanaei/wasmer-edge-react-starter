import {useState} from "react";
import {EventLayoutModel} from "./utils/event.model.ts";
import GlobalHandler from "./components/GlobalHandler/GlobalHandler.tsx";
import SingleDayContainer from "./components/SingleDayContainer/SingleDayContainer.tsx";
import {EventContext} from "./context/EventContext.ts";
import {createLayout} from "./hooks/useEventContext.ts";

const DEFAULT_EVENTS = [{start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670}]

function App() {
    const [events, setEvents] = useState<EventLayoutModel[]>(createLayout(DEFAULT_EVENTS))

    return (
        <>
            <EventContext.Provider value={{events, setEvents}}>
                <GlobalHandler/>
                <SingleDayContainer/>
            </EventContext.Provider>
        </>
    );
}

export default App;
