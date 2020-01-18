import { IUser } from './user.reducer';

export enum UserActions {
    USER_ACTION_START_FETCHING = 'USER_ACTION_START_FETCHING',
    USER_ACTION_DATA_RETRIEVED = 'USER_ACTION_DATA_RETRIEVED',
    USER_ACTION_DATA_ERROR = 'USER_ACTION_DATA_ERROR',
};

// Simulated async call using setTimeout
export const fetchUserAsync = () => {

    return (dispatch: any) => {
        dispatch({ type: UserActions.USER_ACTION_START_FETCHING });

        setTimeout(() => {
            const user: IUser = { username: 'amwebexpert', firstName: 'Andre', lastName: 'Masson' };
            dispatch({ type: UserActions.USER_ACTION_DATA_RETRIEVED, payload: user });
        }, 3000);
    };

};
