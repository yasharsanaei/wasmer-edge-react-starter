import React, {createContext} from "react";
import {EventLayoutModel} from "../utils/event.model.ts";


export type EventContextModel = {
    events: EventLayoutModel[],
    setEvents: React.Dispatch<React.SetStateAction<EventLayoutModel[]>>,
}

export const EventContext = createContext<EventContextModel>({
    events: [],
    setEvents: () => undefined
})