export type EventModel = {
    id?: string;
    start: number;
    end: number;
    title?: string;
    location?: string;
}

export type EventLayoutModel = EventModel & {
    column: number;
    columnCount: number;
};