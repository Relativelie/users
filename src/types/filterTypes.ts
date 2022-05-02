export interface FilterState {
    filteredList: any[],
    defaultFilter: string,
    activeFilter: string,
    allFilters: any,
    isFiltered: boolean,
}

export enum FilterActionTypes {
    TURN_OFF_FILTER = 'TURN_OFF_FILTER',
    TURN_ON_FILTER = 'TURN_ON_FILTER',
}

interface TurnOffFilter {
    type: FilterActionTypes.TURN_OFF_FILTER,
}

interface TurnOnFilter {
    type: FilterActionTypes.TURN_ON_FILTER,
    filterBy: string,
    data: any
}

export type FilterAction =
    TurnOnFilter
    | TurnOffFilter;
