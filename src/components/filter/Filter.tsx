import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Filter.scss';

type Props = {
    list: any
};

export const Filter:FC<Props> = ({ list }) => {
    const { allFilters, activeFilter } = useTypedSelector(
        (listsOfUsersState) => listsOfUsersState.filterReducer,
    );
    const { turnOffFilter, turnOnFilter } = useActions();

    const filterUsers = (filteringFlag: string) => {
        if (activeFilter !== filteringFlag) {
            turnOnFilter(filteringFlag, list);
        } else {
            turnOffFilter();
        }
    };

    return (
        <section className="filter">
            <h3 className="filter__header">Сортировка</h3>
            {Object.keys(allFilters).map((key, index) => {
                const activeClass = 'filter__button_isActive';
                const selectedFilter = key === activeFilter ? activeClass : '';
                return (
                    <button
                        className={`filter__button ${selectedFilter}`}
                        key={`filter-${index}`}
                        type="button"
                        data-filterby={key}
                        onClick={() => filterUsers(key)}
                    >
                        {allFilters[key]}
                    </button>
                );
            })}
        </section>
    );
};
