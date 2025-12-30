import {useEffect} from "react";
import {EventModel} from "../../types.ts";
import {useEventContext} from "../../hooks/useEventContext.ts";

const GlobalHandler = () => {
    const {updateEvents} = useEventContext();

    useEffect(() => {
        window.layOutDay = (events: EventModel[]) => {
            updateEvents(events)
        };

        return () => {
            delete window.layOutDay;
        };
    }, [updateEvents]);

    return null;
}

export default GlobalHandler;