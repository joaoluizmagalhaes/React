import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

console.log(store.getState());

// Actions - Object that gets sent to the store

// Increment Count
store.dispatch({
    type: 'INCREMENT' //CONVENTION USE CAPITAL LETTERS IN REDUX
});

store.dispatch({
    type: 'INCREMENT' //CONVENTION USE CAPITAL LETTERS IN REDUX
});

// Reset
store.dispatch({
    type: 'RESET'
});

// Decrement Count
store.dispatch({
    type: 'DECREMENT'
});




console.log(store.getState());