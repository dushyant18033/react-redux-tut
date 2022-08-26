export const increment = (value=1) => {
    return {
        type: 'INCREMENT',
        value: value
    }
};

export const decrement = (value=1) => {
    return {
        type: 'DECREMENT',
        value: value
    }
};

export const reset = () => {
    return {
        type: 'RESET'
    }
};

export const login = () => {
    return {
        type: 'LOGIN'
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
};