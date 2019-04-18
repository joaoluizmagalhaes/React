import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
});

// when the state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - Object that gets sent to the store

// Increment Count
store.dispatch({
    type: 'INCREMENT', //CONVENTION USE CAPITAL LETTERS IN REDUX
    incrementBy: 5
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

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 3
});

store.dispatch({
    type: 'SET',
    count: 101
});