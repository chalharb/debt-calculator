import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    addDebt,
    updateDebt,
    deleteDebt,
    selectDebts,
} from './debtsSlice';

interface Debt {
    id: number;
    name: string;
    rate: number;
    payment: number;
    balance: number;
}

let randomNumber = () => {
    return Math.floor(Math.random() * 1000)
}

export function Debts() {
    const debts = useAppSelector(selectDebts);
    const dispatch = useAppDispatch();

    const debtExample: Debt = {
        id: Math.floor(Math.random() * 1000),
        name: 'American Express',
        rate: 2.24,
        payment: 240.00,
        balance: 5000.00
    }

    let debtList = debts.map(debt => {
        return (
            <div key={debt.id}>
                {debt.id} - {debt.name} - {debt.balance}

                <button
                    onClick={() => dispatch(deleteDebt(debt))}
                >
                    Delete Debt
                </button>
                <button
                    onClick={() => {
                        let debtCopy = { ...debt }
                        let myNumber = randomNumber()
                        debtCopy.balance = myNumber
                        dispatch(updateDebt(debtCopy))
                    }}
                >
                    Update Debt
                </button>
            </div>
        )
    })

    return (
        <div>
            <button
                onClick={() => dispatch(addDebt(debtExample))}
            >
                Add Debt
            </button>

            {debtList}
        </div>
    );
}
