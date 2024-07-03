// reducers.js

const initialState = {
    currentUser: {
        username: null,
        isLoggedIn: false,
    },
};

const SET_USER = 'SET_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const setUser = (userData) => ({
    type: SET_USER,
    payload: userData,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: {
                    username: action.payload.username,
                    isLoggedIn: true,
                },
            };
        case LOGOUT_USER:
            return {
                ...state,
                currentUser: {
                    username: null,
                    isLoggedIn: false,
                },
            };
        default:
            return state;
    }
};

export default userReducer;
