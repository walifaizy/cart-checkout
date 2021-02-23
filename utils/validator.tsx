export default {
    isValidInput(value, type) {
        switch (type) {
            case 'text':
                return !(value && /^[A-Za-z]|[A-Za-z][A-Za-z\s]*[A-Za-z]$/.test(value));

            case 'email':
                return !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);

            case 'onlyNumber':
                return !/^\d+$/.test(value);

            case 'alphaNum':
                //return !/[a-zA-Z0-9]+/.test(value);
                return !(value && /[a-zA-Z0-9]+/.test(value));
        }
    },

    validUAEPhoneNumber: (phone: string) => {
        const phoneRegex = /^(?:\+971|00971|0)?(?:50|51|52|54|55|56|58|2|3|4|6|7|9)\d{7}$/;

        return !(phone && phoneRegex.test(phone));
    },
};
