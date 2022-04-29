import './App.scss';
import { ListsOfUsers } from '../ListsOfUsers/ListsOfUsers';
import { Filter } from '../filter/Filter';
import { UserInfo } from '../userInfo/UserInfo';

function App() {
    // const activePage =
    return (
        <div className="App">
            <div className="container">
                <Filter />
                <main className="container__info">
                    <UserInfo />
                </main>

            </div>
        </div>
    );
}

export default App;
