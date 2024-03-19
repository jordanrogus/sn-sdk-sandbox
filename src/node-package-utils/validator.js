import validator from 'validator'

export const isEmail = function (email) {
    return validator.isEmail(email);
}

export const isHexColor = function (hexColor) {
    return validator.isHexColor(hexColor);
}

export const isIP = function (ip) {
    return validator.isIP(ip);
}

// Additional validations could be added