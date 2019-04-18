import { createStore } from 'redux';

// Action Generators - 

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(action.incrementBy)
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            console.log(action.decrementBy)
            return {
                count: state.count - action.decrementBy
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

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

// Reset
store.dispatch(resetCount());

// Decrement Count
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 2
});

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 3}));

// store.dispatch(setCount({ count: 102 }));