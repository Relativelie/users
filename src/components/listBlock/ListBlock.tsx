import { useEffect } from 'react';
import { data } from '../../data/data';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserCard } from './userCard/UserCard';

import './ListBlock.scss';

export const ListBlock = () => {
    const { saveUsersList, openUserInfo } = useActions();
    const { list } = useTypedSelector(
        (listsOfUsersState) => listsOfUsersState.listBlockReducer,
    );
    const { isFiltered, filteredList, activeFilter } = useTypedSelector(
        (listsOfUsersState) => listsOfUsersState.filterReducer,
    );

    useEffect(() => {
        saveUsersList(data);
    }, []);

    useEffect(() => {
        if (isFiltered) saveUsersList(filteredList);
        else saveUsersList(data);
    }, [activeFilter]);

    return (
        <section className="list">
            <h3 className="list__header">Список пользователей</h3>
            <div className="list__cards">
                {list.map((user: any) => {
                    const { id, name, address, company } = user;
                    return (
                        <UserCard
                            key={id}
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
