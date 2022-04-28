import {
    ListOfUsersState, ListOfUsersAction, ListOfUsersActionTypes,
} from '../../types/listOfUsersTypes';

const initialState: ListOfUsersState = {
    list: [],
    defaultFilter: 'id',
    activeFilter: '',
    allFilters: {
        address_city: 'по городу',
        company_name: 'по компании',
    },
    isFiltered: false,
    isOpenListCard: false,
    openedCardId: null,
};

export const listOfUsersReducer = (state = initialState, action: ListOfUsersAction): ListOfUsersState => {
    switch (action.type) {
        case ListOfUsersActionTypes.SAVE_USERS_LIST: {
            return {
                ...state,
                list: action.data,
            };
        }
        case ListOfUsersActionTypes.TURN_ON_FILTER: {
            const allList = [...state.list];
            if (action.filterBy.indexOf('_') !== -1) {
                const delimiterIndex = action.filterBy.indexOf('_');
                const firstKeyFlag = action.filterBy.substring(0, delimiterIndex);
                const secondKeyFlag = action.filterBy.substring(delimiterIndex + 1, action.filterBy.length);
                allList.sort((first, second) => first[firstKeyFlag][secondKeyFlag].localeCompare(second[firstKeyFlag][secondKeyFlag]));
            } else {
                const filteringFlag = action.filterBy;
                allList.sort((first, second) => first[filteringFlag].localeCompare(second[filteringFlag]));
            }
            return {
                ...state,
                list: allList,
                activeFilter: action.filterBy,
                isFiltered: true,
            };
        }
        case ListOfUsersActionTypes.TURN_OFF_FILTER: {
            const allList = [...state.list];
            allList.sort((first, second) => {
                return first[state.defaultFilter] - second[state.defaultFilter];
            });
            return {
                ...state,
                list: allList,
                isFiltered: false,
                activeFilter: '',
            };
        }
        case ListOfUsersActionTypes.OPEN_USER_INFO: {
            return {
                ...state,
                isOpenListCard: true,
                openedCardId: action.id,
            };
        }

        case ListOfUsersActionTypes.CLOSE_USER_INFO: {
            return {
                ...state,
                isOpenListCard: false,
                openedCardId: null,
            };
        }
        default:
            return state;
    }
};
