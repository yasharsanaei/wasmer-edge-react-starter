import {EventModel} from "./types.ts";

declare global {
    interface Window {
        layOutDay?: (events: EventModel[]) => void;
    }
}