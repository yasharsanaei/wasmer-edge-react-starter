import {EventModel} from "./utils/event.model.ts";

declare global {
    interface Window {
        layOutDay?: (events: EventModel[]) => void;
    }
}