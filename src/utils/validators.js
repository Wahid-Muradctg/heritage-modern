export const rules = {
    date: (v) => {
        if (!v) return 'Date is required';
        const selected = new Date(v);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) return 'Date cannot be in the past';
        return '';
    },
    time: (v) => {
        if (!v) return 'Time is required';
        return '';
    },
    partySize: (v) => {
        if (!v) return 'Party size is required';
        return '';
    },
    name: (v) => {
        if (!v.trim()) return 'Name is required';
        if (v.trim().length < 3) return 'Name must be at least 3 characters';
        return '';
    },
    email: (v) => {
        if (!v.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return 'Enter a valid email';
        return '';
    },
    phone: (v) => {
        if (!v.trim()) return 'Phone is required';
        if (!/^\d{10,11}$/.test(v.trim())) return 'Enter a valid phone number';
        return '';
    },
    address: (v) => {
        if (!v.trim()) return 'Address is required';
        if (v.trim().length < 5) return 'Address must be at least 5 characters';
        return '';
    },
    subject: (v) => {
        if (!v.trim()) return 'Subject is required';
        if (v.trim().length < 3) return 'Subject must be at least 3 characters';
        return '';
    },
    message: (v) => {
        if (!v.trim()) return 'Message is required';
        if (v.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
    },
};

export const validateField = (name, value) => {
    return rules[name] ? rules[name](value) : '';
};

export const validateAll = (fields) => {
    const errors = {};
    let firstError = null;
    for (const [name, value] of Object.entries(fields)) {
        const error = validateField(name, value);
        errors[name] = error;
        if (error && !firstError) firstError = name;
    }
    return { errors, firstError };
};
