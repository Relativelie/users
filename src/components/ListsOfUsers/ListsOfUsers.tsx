import { useEffect } from 'react';
import { data } from '../../data/data';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './ListsOfUsers.scss';

export const ListsOfUsers = () => {
    const { saveUsersList, openUserInfo } = useActions();
    const { list } = useTypedSelector(
        (listsOfUsersState) => listsOfUsersState.listOfUsersReducer,
    );

    useEffect(() => {
        saveUsersList(data);
    }, []);

    return (
        <section className="list">
            <h3 className="list__header">Список пользователей</h3>
            <div className="list__cards">
                {list.map((user: any) => {
                    const { id, name, address, company } = user;
                    return (
                        <div className="list__card" key={id}>
                            <div>
                                <p className="list__cardContent">
                                    <span className="list__cardContentTitle">ФИО:</span>
                                    {name}
                                </p>
                                <p className="list__cardContent">
                                    <span className="list__cardContentTitle">город:</span>
                                    {address.city}
                                </p>
                                <p className="list__cardContent">
                                    <span className="list__cardContentTitle">компания:</span>
                                    {company.name}
                                </p>
                            </div>
                            <p
                                className="list__more"
                                onClick={() => openUserInfo(id)}
                            >
                                Подробнее
                            </p>
                        </div>
                    );
                })}
            </div>
            <p className="list__resultCount">{`Найдено ${list.length} пользователей`}</p>
        </section>
    );
};
