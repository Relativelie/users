import { closeCard, openCard, saveList } from '../../../src/store/actions/listBlockActions';
import { listBlockReducer } from '../../../src/store/reducers/listBlockReducer';
import { ListBlockState } from '../../../src/types/listBlockTypes';
import { data } from '../../testValues/data';

let state: ListBlockState;
let stateForClose: ListBlockState;
beforeEach(() => {
    state = {
        list: [],
        isOpenListCard: false,
        openedCardId: null,
    };
    stateForClose = {
        list: [],
        isOpenListCard: true,
        openedCardId: null,
    };
});

describe('list block reducer', () => {
    test('save list', () => {
        const newState = listBlockReducer(
            state,
            saveList(data),
        );
        expect(newState).toStrictEqual({
            ...state,
            list: data,
        });
    });

    test('open card', () => {
        const newState = listBlockReducer(
            state,
            openCard(3),
        );
        expect(newState).toStrictEqual({
            ...state,
            isOpenListCard: true,
            openedCardId: 3,
        });
    });

    test('close card', () => {
        const newState = listBlockReducer(
            stateForClose,
            closeCard(),
        );
        expect(newState).toStrictEqual({
            ...stateForClose,
            isOpenListCard: false,
            openedCardId: null,
        });
    });
});
