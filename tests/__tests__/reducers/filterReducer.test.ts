import { turnOnFilter } from '../../../src/store/actions/filterActions';
import { filterReducer } from '../../../src/store/reducers/filterReducer';
import { FilterState } from '../../../src/types/filterTypes';
import { data } from '../../__mocks__/data';

let state: FilterState;
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
});

describe('filter reducer', () => {
    test('turn on filter', () => {
        const newState = filterReducer(
            state,
            turnOnFilter('address_city', data),
        );
        expect(newState).toStrictEqual({
            ...stateOnEditMode,
            isDisabledForm: false,
        });
    });
});
