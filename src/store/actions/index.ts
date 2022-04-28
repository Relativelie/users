import * as listOfUsersCreators from './listOfUsersActions';
import * as userInfoCreators from './userInfoActions';

export default {
    ...listOfUsersCreators,
    ...userInfoCreators,
};
