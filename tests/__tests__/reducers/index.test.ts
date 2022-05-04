import { reducers } from '../../../src/store/reducers';
import { cardBlockReducer } from '../../../src/store/reducers/cardBlockReducer';
import { filterReducer } from '../../../src/store/reducers/filterReducer';
import { listBlockReducer } from '../../../src/store/reducers/listBlockReducer';
import { sendRequestReducer } from '../../../src/store/reducers/sendRequestReducer';

test('necessary reducers ​​are prepared', () => {
    expect(reducers.listBlockReducer).toEqual(listBlockReducer);
    expect(reducers.filterReducer).toEqual(filterReducer);
    expect(reducers.cardBlockReducer).toEqual(cardBlockReducer);
    expect(reducers.sendRequestReducer).toEqual(sendRequestReducer);
});
