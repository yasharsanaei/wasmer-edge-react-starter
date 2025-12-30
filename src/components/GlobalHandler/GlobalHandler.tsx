import {useEffect} from "react";
import {EventModel} from "../../types.ts";
import {useEventContext} from "../../hooks/useEventContext.ts";

const GlobalHandler = () => {
    const {updateEvents} = useEventContext();

    useEffect(() => {
        console.log('---> handler effect ')
        window.layOutDay = (events: EventModel[]) => {
            updateEvents(events)
        };
    });

    return null;
}

export default GlobalHandler;