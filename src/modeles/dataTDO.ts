export interface IEvent {
    eventId: number;
    date: string;
    description: string;
}

export interface ICategory {
    id: number;
    from: number;
    to: number;
    name?: string;
    events: IEvent[];
}

export interface IDataTDO {
    data: ICategory[];
}
