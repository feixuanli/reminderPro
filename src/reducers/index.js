import { APP_REMINDER } from '../constants';

const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
};

const reminders = (state=[], action) => {
    let reminders = null;
    switch (action.type) {
        case APP_REMINDER: {
            reminders = [...state, reminder(action)];
            console.log('reminder as state', reminders);
            return reminders;
        }
        default: 
            return state;
    }
}

export default reminders;