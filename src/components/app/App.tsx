import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
            <Router>
                <div className="container">
                    <Filter />
                    <main className="container__info">
                        <Routes>
                            <Route path="/" element={<ListsOfUsers />} />
                            <Route path="/user/:id" element={<UserInfo />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                        {/* {isOpenListCard ? <UserInfo /> : <ListsOfUsers />} */}
                    </main>
                </div>
            </Router>
        </div>
    );
}

export default App;
