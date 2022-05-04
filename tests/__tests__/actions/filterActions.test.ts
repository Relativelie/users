import { turnOffFilter, turnOnFilter } from '../../../src/store/actions/filterActions';
import { FilterActionTypes } from '../../../src/types/filterTypes';

describe('filter actions', () => {
    test('action to turn on filter', () => {
        expect(turnOnFilter('city', [{ city: 'l' }])).toEqual({
            type: FilterActionTypes.TURN_ON_FILTER,
            filterBy: 'city',
            data: [{ city: 'l' }],
        });
    });

    test('action to turn off filter', () => {
        expect(turnOffFilter()).toEqual({
            type: FilterActionTypes.TURN_OFF_FILTER,
        });
    });
});
