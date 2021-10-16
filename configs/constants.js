module.exports = {
    PASSWORD_REGEXP: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/),
    EMAIL_REGEXP: new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'),
    MAX_YEAR: (new Date().getFullYear() - 2),
    MIN_YEAR: (new Date().getFullYear() - 40),
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    FORBIDDEN: 403,
    EMAIL_ALREADY_EXISTS: 'Email already exist',
    ACCESS_DENIED: 'Access denied',
    WRONG_EMAIL_OR_PASSWORD: 'Wrong email or password',
    CAN_NOT_CHANGE_FIELDS: 'You can not change email , password or role',
    USER_ID_DOES_NOT_EXIST: 'User_id does not exist',
    CAR_ID_DOES_NOT_EXIST: 'Car_id does not exist'
};
