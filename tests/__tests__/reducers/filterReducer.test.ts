import { turnOffFilter, turnOnFilter } from '../../../src/store/actions/filterActions';
import { filterReducer } from '../../../src/store/reducers/filterReducer';
import { FilterState } from '../../../src/types/filterTypes';
import { data } from '../../testValues/data';
import { dataCity } from '../../testValues/data-city';

let state: FilterState;
let stateForTurnOff: FilterState;
beforeEach(() => {
    state = {
        filteredList: [],
        activeFilter: '',
        allFilters: {
            address_city: 'по городу',
            company_name: 'по компании',
        },
        isFiltered: false,
    };
    stateForTurnOff = {
        filteredList: data,
        activeFilter: 'id',
        allFilters: {
            address_city: 'по городу',
            company_name: 'по компании',
            id: 'id',
        },
        isFiltered: true,
    };
});

describe('filter reducer', () => {
    test('turn on filter for nested filtered value', () => {
        const newState = filterReducer(
            state,
            turnOnFilter('address_city', data),
        );
        expect(newState).toStrictEqual({
            ...state,
            filteredList: dataCity,
            activeFilter: 'address_city',
            isFiltered: true,
        });
    });

    test('turn on filter for not nested filtered value', () => {
        const newState = filterReducer(
            state,
            turnOnFilter('id', data),
        );
        expect(newState).toStrictEqual({
            ...state,
            filteredList: data,
            activeFilter: 'id',
            isFiltered: true,
        });
    });

    test('turn off filter', () => {
        const newState = filterReducer(
            stateForTurnOff,
            turnOffFilter(),
        );
        expect(newState).toStrictEqual({
            ...stateForTurnOff,
            filteredList: [],
            isFiltered: false,
            activeFilter: '',
        });
    });
});
