import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }


    const handleInputChange = ({ target }, n) => {

        setValues({
            ...values,
            [ target.name ]: n ? Number.parseInt(target.value) : target.value,
        });

    }

    return [ values, handleInputChange, reset ];

}