import { useEffect } from 'react';
import { data } from '../../data/data';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserCard } from './userCard/UserCard';

import './ListBlock.scss';

export const ListBlock = () => {
    const { saveList, openCard } = useActions();
    const { list } = useTypedSelector(
        (listBlockState) => listBlockState.listBlockReducer,
    );
    const { isFiltered, filteredList, activeFilter } = useTypedSelector(
        (filterState) => filterState.filterReducer,
    );

    useEffect(() => {
        saveList(data);
    }, []);

    useEffect(() => {
        if (isFiltered) saveList(filteredList);
        else saveList(data);
    }, [activeFilter]);

    return (
        <section className="list">
            <h3 className="list__header">Список пользователей</h3>
            <div className="list__cards">
                {list.map((user: Record<string, any>) => {
                    const { id, name, address, company } = user;
                    return (
                        <UserCard
                            key={id}
                            id={id}
                            name={name}
                            address={address}
                            company={company}
                            openCard={openCard}
                        />
                    );
                })}
            </div>
            <p className="list__resultCount">{`Найдено ${list.length} пользователей`}</p>
        </section>
    );
};
