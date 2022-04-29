import { ListsOfUsers } from '../ListsOfUsers/ListsOfUsers';
import { Filter } from '../filter/Filter';
import { UserInfo } from '../userInfo/UserInfo';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './App.scss';

function App() {
    const { isOpenListCard } = useTypedSelector(
        (listsOfUsersState) => listsOfUsersState.listOfUsersReducer,
    );

    return (
        <div className="App">
            <div className="container">
                <Filter />
                <main className="container__info">
                    {isOpenListCard ? <UserInfo /> : <ListsOfUsers />}
                </main>

            </div>
        </div>
    );
}

export default App;
