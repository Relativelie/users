import { closeCard, openCard, saveList } from '../../../src/store/actions/listBlockActions';
import { ListBlockActionTypes } from '../../../src/types/listBlockTypes';

describe('list block actions', () => {
    test('action to save list', () => {
        expect(saveList([{ e: 'tt' }])).toEqual({
            type: ListBlockActionTypes.SAVE_LIST,
            data: [{ e: 'tt' }],
        });
    });

    test('action to open card', () => {
        expect(openCard(3)).toEqual({
            type: ListBlockActionTypes.OPEN_CARD,
            id: 3,
        });
    });

    test('action to close card', () => {
        expect(closeCard()).toEqual({
            type: ListBlockActionTypes.CLOSE_CARD,
        });
    });
});
