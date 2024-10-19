export interface Day {
    date: string;
    slot_start: number;
    slot_end: number;
    slot_count: number;
    pm: number;
    lh: number;
    tk: number;
    nb: number;
    ls: number;
    gr: number;
    nm: number;
    ge: number;
    bu: number;
    eg: number;
    rh: number;
    ej: number;
}

export type ClientKeys = Exclude<keyof Day, 'date' | 'slot_start' | 'slot_end' | 'slot_count'>