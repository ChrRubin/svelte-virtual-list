import { SvelteComponentTyped } from "svelte";

export interface VirtualListProps<T> {
    items: T[];
    height: string;
    itemHeight: string;
    start: number;
    end: number;
}

export interface VirtualListSlots<T> {
    default: {
        item: T
    }
}

export default class VirtualList<T> extends SvelteComponentTyped<
    VirtualListProps<T>,
    {},
    VirtualListSlots<T>
> { }
