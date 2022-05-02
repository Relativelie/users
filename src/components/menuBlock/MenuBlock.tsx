import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Back } from './back/Back';
import { Filter } from './filter/Filter';
import './MenuBlock.scss';

type Props = {
    list: object
};

export const MenuBlock:FC<Props> = ({ list }) => {
    const { isOpenListCard } = useTypedSelector(
        (listBlockState) => listBlockState.listBlockReducer,
    );
    return (
        <section className="menuBlock">
            {isOpenListCard && <Back />}
            {!isOpenListCard && <Filter list={list} /> }
        </section>
    );
};
