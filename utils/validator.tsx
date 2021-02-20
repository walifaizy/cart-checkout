export default {
    isValidInput(value, type) {
        switch (type) {
            case 'text':
                return !(value && /^[A-Za-z]|[A-Za-z][A-Za-z\s]*[A-Za-z]$/.test(value));

            case 'email':
                return !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
        }
    },
};
