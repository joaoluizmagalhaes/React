import { addExpenses, editExpense, removeExpense } from '../../actions/expenses';
jest.mock('../../actions/expenses', () => 'myExpenses');

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});