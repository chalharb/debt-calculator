import toggleStrategyReducer, {
    updateStrategy,
} from './toggleStrategySlice';

import { Strategy } from './types';

describe('debts reducer', () => {

    const initialState = 'avalanche' as Strategy;

    it('should handle initial state', () => {
        expect(initialState).toEqual('avalanche');
    });

    it('should update Strategy', () => {
        let stategyUpdateValue:Strategy = 'snowball';
        const actual = toggleStrategyReducer(initialState, updateStrategy(stategyUpdateValue));
        expect(actual).toEqual('snowball');
    });
});