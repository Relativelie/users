import * as listOfUsersCreators from './listOfUsersActions';
import * as userInfoCreators from './userInfoActions';
import * as sendRequestCreators from './sendRequestActions';

export default {
    ...listOfUsersCreators,
    ...userInfoCreators,
    ...sendRequestCreators,
};
