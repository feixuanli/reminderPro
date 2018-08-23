import {APP_REMINDER} from '../constants';

export const addReminder = (text) => {
    const action = {
        type: APP_REMINDER,
        text,
    }
    console.log('action in addreminder', action);
    return action;
}