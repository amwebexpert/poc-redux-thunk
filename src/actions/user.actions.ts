import { IUser } from '../reducers/user.reducer';

export enum UserActions {
    USER_ACTION_START_FETCHING = 'USER_ACTION_START_FETCHING',
    USER_ACTION_DATA_RETRIEVED = 'USER_ACTION_DATA_RETRIEVED',
    USER_ACTION_DATA_ERROR = 'USER_ACTION_DATA_ERROR',
};

export const fetchUserAsync = () => {

    return (dispatch: any) => {
        dispatch({ type: UserActions.USER_ACTION_START_FETCHING });

        // Simulated async call using setTimeout
        setTimeout(() => {
            const mockUser: IUser = { username: 'amwebexpert', firstName: 'Andre', lastName: 'Masson' };
            dispatch({ type: UserActions.USER_ACTION_DATA_RETRIEVED, payload: mockUser });
        }, 3000);
    };

};
