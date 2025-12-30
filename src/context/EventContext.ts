import React, {createContext} from "react";
import {EventLayoutModel} from "../types.ts";


export type EventContextModel = {
    events: EventLayoutModel[],
    setEvents: React.Dispatch<React.SetStateAction<EventLayoutModel[]>>,
}

export const EventContext = createContext<EventContextModel>({
    events: [],
    setEvents: () => undefined
})