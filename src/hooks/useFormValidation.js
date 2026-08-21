import { useState } from 'react';
import { validateField } from '../utils/validators';

export const useFormValidation = () => {
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const getInputBorder = (name) => {
        if (!touched[name]) return 'border-(--primary-color-dark)/40';
        return errors[name] ? 'border-(--error)' : 'border-(--success)';
    };

    const getFocusClass = (name) => {
        if (!touched[name]) return 'focus:border-(--primary-color-dark)';
        return errors[name] ? 'focus:border-(--error)' : 'focus:border-(--success)';
    };

    const resetValidation = () => {
        setErrors({});
        setTouched({});
    };

    return { errors, touched, handleChange, handleBlur, getInputBorder, getFocusClass, resetValidation };
};
