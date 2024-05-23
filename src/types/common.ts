import { ReactNode } from "react";

export type FetchStatus = '' | 'success' | 'loading' | 'error';

export interface Player {
    player?: string
    videoKey?: string | null
}

export interface IModal {
    children: ReactNode
    title?: string
    hasDivider?: boolean
    open?: boolean
    closeOnClickOutside?: boolean
    onClosed?: () => void
}
