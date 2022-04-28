import './App.scss';
import { ListsOfUsers } from '../ListsOfUsers/ListsOfUsers';
import { Filter } from '../filter/Filter';
import { UserInfo } from '../userInfo/UserInfo';

function App() {
    
    const activePage = 
    return (
        <div className="App">
            <div className="container">
                <Filter />
                { if (true) return <ListsOfUsers />
                else return <UserInfo />}
            </div>
        </div>
    );
}

export default App;
