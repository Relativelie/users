import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Filter } from '../filter/Filter';
import { ListBlock } from '../listBlock/ListBlock';
import { CardBlock } from '../cardBlock/CardBlock';
import './App.scss';

function App() {
    const { list } = useTypedSelector(
        (listBlockState) => listBlockState.listBlockReducer,
    );
    return (
        <div className="App">
            <Router>
                <div className="container">
                    <Filter list={list} />
                    <main className="container__info">
                        <Routes>
                            <Route path="/" element={<ListBlock />} />
                            <Route path="/user/:id" element={<CardBlock />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </div>
    );
}

export default App;
