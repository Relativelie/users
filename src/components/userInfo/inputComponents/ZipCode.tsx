import { useRef, MutableRefObject, useState } from 'react';

export const ZipCode = () => {
    const [zipCode, setZipCode] = useState('');
    const [isErrorZipCode, setIsErrorZipCode] = useState(false);
    const zipCodeRef = useRef() as MutableRefObject<HTMLInputElement>;

    const zipCodeChange = () => {
        const inputValue = zipCodeRef.current.value.replace(/-/g, '/');
        if (Number.isNaN(parseInt(inputValue, 10))) setIsErrorZipCode(true);
        else setIsErrorZipCode(false);
    };

    return (
        <div>
            <label htmlFor="zip code">
                Zip Code
            </label>
            <input
                className={`${isErrorZipCode && 'errorInput'}`}
                type="text"
                ref={zipCodeRef}
                onChange={() => zipCodeChange()}
            />
        </div>
    );
};
