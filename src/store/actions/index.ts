import * as ListBlockCreators from './listBlockActions';
import * as filterCreators from './filterActions';
import * as userInfoCreators from './userInfoActions';
import * as sendRequestCreators from './sendRequestActions';

export default {
    ...ListBlockCreators,
    ...filterCreators,
    ...userInfoCreators,
    ...sendRequestCreators,
};
