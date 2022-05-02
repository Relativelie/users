import { FilterAction, FilterActionTypes } from '../../types/filterTypes';

export const turnOnFilter = (filterBy: string, data: any): FilterAction => ({
    type: FilterActionTypes.TURN_ON_FILTER,
    filterBy,
    data,
});

export const turnOffFilter = (): FilterAction => ({
    type: FilterActionTypes.TURN_OFF_FILTER,
});
