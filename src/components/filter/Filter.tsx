import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Filter.scss';

export const Filter = () => {
    const { allFilters, activeFilter } = useTypedSelector(
        (listsOfUsersState) => listsOfUsersState.listOfUsersReducer,
    );
    const { turnOffFilter, turnOnFilter } = useActions();

    const filterUsers = (filteringFlag: string) => {
        if (activeFilter.length === 0) turnOnFilter(filteringFlag);
        else turnOffFilter();
    };

    return (
        <section className="filter">
            <h3 className="filter__header">Сортировка</h3>
            {Object.keys(allFilters).map((key, index) => {
                return (
                    <button
                        className="filter__button"
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
