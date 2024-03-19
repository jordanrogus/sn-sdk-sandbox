import validator from 'validator'

export const isEmail = function (email) {
    return validator.isEmail(email);
}

// Additional validations could be added