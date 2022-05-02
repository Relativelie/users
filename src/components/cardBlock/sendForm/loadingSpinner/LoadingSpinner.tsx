import { FC } from 'react';
import './LoadingSpinner.scss';

interface Props {
    isLoading: boolean
}

export const LoadingSpinner:FC<Props> = ({ isLoading }) => {
    if (isLoading) {
        return (
            <div className="loading loadingSpinner" />
        );
    } else {
        return (
            <div className="loading" />
        );
    }
};
