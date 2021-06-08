import debtsReducer, {
    Debt,
    addDebt,
    updateDebt,
    deleteDebt,
} from './debtsSlice'

describe('debts reducer', () => {
    let newDebt: Debt = {
        id: 0,
        name: 'amex',
        rate: 2.4,
        payment: 200,
        balance: 1000,
    };

    const initialState: Array<Debt> = [newDebt];

    it('should handle initial state', () => {
        expect(initialState).toEqual([{
            id: 0,
            name: 'amex',
            rate: 2.4,
            payment: 200,
            balance: 1000,
        }]);
    });

    it('should add new Debt', () => {
        const actual = debtsReducer(initialState, addDebt(newDebt));
        expect(actual).toEqual([...initialState, { ...newDebt }]);
    });

    it('should update Debt', () => {
        let debtCopy = { ...newDebt };
        debtCopy.balance = 500
        const actual = debtsReducer(initialState, updateDebt(debtCopy));
        expect(actual).toEqual([{ ...debtCopy }]);
    });

    it('should delete Debt', () => {
        const actual = debtsReducer(initialState, deleteDebt(newDebt));
        expect(actual).toEqual([]);
    });
});