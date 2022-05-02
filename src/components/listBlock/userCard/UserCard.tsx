import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    id: number,
    name: string,
    address: { city: string },
    company: { name: string },
    openUserInfo: Function
};

export const UserCard: FC<Props> = ({ id, name, address, company, openUserInfo }) => {
    return (
        <div className="list__card">
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
            <Link
                to={`user/${id}`}
                className="list__more"
                onClick={() => openUserInfo(id)}
            >
                Подробнее
            </Link>
        </div>
    );
};
