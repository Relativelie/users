import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ListBlock } from '../listBlock/ListBlock';
import { CardBlock } from '../cardBlock/CardBlock';
import { MenuBlock } from '../menuBlock/MenuBlock';

import './App.scss';

function App() {
    const { list, openedCardId } = useTypedSelector(
        (listBlockState) => listBlockState.listBlockReducer,
    );
    return (
        <div className="App">
            <Router>
                <div className="container">
                    <MenuBlock list={list} />
                    <main className="container__info">
                        <Routes>
                            <Route path="/users" element={<ListBlock />} />
                            <Route
                                path="/user/:id"
                                element={openedCardId !== null ? <CardBlock /> : <Navigate to="/users" />}
                            />
                            <Route path="*" element={<Navigate to="/users" />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </div>
    );
}

export default App;
