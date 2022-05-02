import * as ListBlockCreators from './listBlockActions';
import * as filterCreators from './filterActions';
import * as cardBlockCreators from './cardBlockActions';
import * as sendRequestCreators from './sendRequestActions';

export default {
    ...ListBlockCreators,
    ...filterCreators,
    ...cardBlockCreators,
    ...sendRequestCreators,
};
