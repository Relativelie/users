import { useEffect } from 'react';
import { data } from '../../data/data';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './ListsOfUsers.scss';

export const ListsOfUsers = () => {
    const { saveUsersList } = useActions();
    const { list } = useTypedSelector(
        (listsOfUsersState) => listsOfUsersState.listOfUsersReducer,
    );

    useEffect(() => {
        saveUsersList(data);
    }, []);

    return (
        <section className="list">
            <h3 className="list__header">Список пользователей</h3>
            {list.map((user: any) => {
                const {
                    id, name, address, company,
                } = user;
                return (
                    <div className="list__element" key={id}>
                        <div>
                            <p className="list__elementContent">
                                <span className="list__elementContentTitle">ФИО:</span>
                                {name}
                            </p>
                            <p className="list__elementContent">
                                <span className="list__elementContentTitle">город:</span>
                                {address.city}
                            </p>
                            <p className="list__elementContent">
                                <span className="list__elementContentTitle">компания:</span>
                                {company.name}
                            </p>
                        </div>
                        <p className="list__more">Подробнее</p>
                    </div>
                );
            })}
            <p className="list__resultCount">{`Найдено ${list.length} пользователей`}</p>
        </section>
    );
};