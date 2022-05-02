import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ListBlock } from '../listBlock/ListBlock';
import { CardBlock } from '../cardBlock/CardBlock';
import './App.scss';
import { MenuBlock } from '../menuBlock/MenuBlock';

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
                            <Route path="/" element={<ListBlock />} />
                            <Route
                                path="/user/:id"
                                element={openedCardId !== null ? <CardBlock /> : <Navigate to="/" />}
                            />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </div>
    );
}

export default App;
