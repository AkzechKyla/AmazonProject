import {formatCurrency} from '../../scripts/utils/money.js';

// to create a test suite
describe('Test Suite: formatCurrency', () => {
    // define a single spec
    it('Converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('Works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('Rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});
