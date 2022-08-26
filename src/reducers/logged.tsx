const loggedReducer = (state = false, action = {type: 'NULL'}) => {
    switch (action.type) {
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
};

export default loggedReducer;