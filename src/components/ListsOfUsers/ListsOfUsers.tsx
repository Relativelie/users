import { useEffect } from 'react';
import { data } from '../../data/data';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './ListsOfUsers.scss';
import { UserCard } from './userCard/UserCard';

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
                        <UserCard
                            id={id}
                            name={name}
                            address={address}
                            company={company}
                            openUserInfo={openUserInfo}
                        />
                    );
                })}
            </div>
            <p className="list__resultCount">{`Найдено ${list.length} пользователей`}</p>
        </section>
    );
};
