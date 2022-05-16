import { useEffect } from 'react';
import {
    Routes,
    Route,
    Navigate,
    unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { ListBlock } from '../listBlock/ListBlock';
import { CardBlock } from '../cardBlock/CardBlock';
import { MenuBlock } from '../menuBlock/MenuBlock';

import './App.scss';

function App() {
    const { list, openedCardId } = useTypedSelector(
        (listBlockState) => listBlockState.listBlockReducer,
    );
    const { closeCard, turnOffEditMode } = useActions();

    const history = createBrowserHistory({ window });
    useEffect(() => {
        return history.listen(() => {
            if (history.action === 'POP') {
                closeCard();
                turnOffEditMode();
            }
        });
    }, [history]);

    return (
        <div className="App">
            <HistoryRouter history={history}>
                <div className="container">
                    <MenuBlock list={list} />
                    <main className="container__info">
                        <Routes>
                            <Route path="/users" element={<ListBlock />} />
                            <Route
                                path="/users/user/:id"
                                element={openedCardId !== null ? <CardBlock /> : <Navigate to="/users" />}
                            />
                            <Route path="*" element={<Navigate to="/users" />} />
                        </Routes>
                    </main>
                </div>
            </HistoryRouter>
        </div>
    );
}

export default App;
