import { FilterAction, FilterActionTypes, FilterState } from '../../types/filterTypes';

const initialState: FilterState = {
    filteredList: [],
    activeFilter: '',
    allFilters: {
        address_city: 'по городу',
        company_name: 'по компании',
    },
    isFiltered: false,
};

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
    switch (action.type) {
        case FilterActionTypes.TURN_ON_FILTER: {
            const filteredItems = [...action.data];
            if (action.filterBy.indexOf('_') !== -1) {
                const delimiterIndex = action.filterBy.indexOf('_');
                const firstKeyFlag = action.filterBy.substring(0, delimiterIndex);
                const secondKeyFlag = action.filterBy.substring(delimiterIndex + 1, action.filterBy.length);
                filteredItems.sort((first, second) => first[firstKeyFlag][secondKeyFlag].localeCompare(second[firstKeyFlag][secondKeyFlag]));
            } else {
                const filteringFlag = action.filterBy;
                filteredItems.sort((first, second) => first[filteringFlag].localeCompare(second[filteringFlag]));
            }
            return {
                ...state,
                filteredList: filteredItems,
                activeFilter: action.filterBy,
                isFiltered: true,
            };
        }
        case FilterActionTypes.TURN_OFF_FILTER: {
            return {
                ...state,
                filteredList: [],
                isFiltered: false,
                activeFilter: '',
            };
        }
        default:
            return state;
    }
};
