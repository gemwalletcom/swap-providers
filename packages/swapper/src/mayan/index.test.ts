import { parseDecimals } from "../bigint";

describe('Fetch Quote', () => {
    it('Parse decimal string to BigInt string', () => {
        const output_value = "0.1384511931777";
        const output_min_value = "0.13641535";

        const output_value_bigint = parseDecimals(output_value, 9);
        const output_min_value_bigint = parseDecimals(output_min_value, 9);

        expect(output_value_bigint.toString()).toEqual("138451193");
        expect(output_min_value_bigint.toString()).toEqual("136415350");
    });
});

