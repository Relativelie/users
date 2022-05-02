import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ListsOfUsers } from '../ListsOfUsers/ListsOfUsers';
import { Filter } from '../filter/Filter';
import { UserInfo } from '../userInfo/UserInfo';
import './App.scss';

function App() {
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
                    </main>
                </div>
            </Router>
        </div>
    );
}

export default App;
