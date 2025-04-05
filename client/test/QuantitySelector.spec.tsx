import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { QuantitySelector } from "../components/QuantitySelector/QuantitySelector";

describe('QuantitySelector component', () => {
    const mockOnSelectQuantity = jest.fn();

    afterEach(() => {
        mockOnSelectQuantity.mockReset();
    });

    it('should call onSelectQuantity method with the proper value when "INCREASING" the value', () => {
        const initialValue = 5;
        const expectedValue = initialValue + 1;

        const { getByText } = render(<QuantitySelector value={initialValue} onSelectQuantity={mockOnSelectQuantity} />);

        const increaseQuantity = getByText("+");

        expect(increaseQuantity).toBeInTheDocument();

        fireEvent.click(increaseQuantity);

        expect(mockOnSelectQuantity).toHaveBeenNthCalledWith(1, expectedValue); // Increase value by 1
    });

    it('should call onSelectQuantity method with the proper value when "DECREASING" the value', () => {
        const initialValue = 5;
        const expectedValue = initialValue - 1;

        const { getByText } = render(<QuantitySelector value={initialValue} onSelectQuantity={mockOnSelectQuantity} />);

        const decreaseQuantity = getByText("-");

        expect(decreaseQuantity).toBeInTheDocument();

        fireEvent.click(decreaseQuantity);

        expect(mockOnSelectQuantity).toHaveBeenNthCalledWith(1, expectedValue); // Decrease value by 1
    });

    it('should decrease button be disabled if quantity value is equals to 1', () => {
        const initialValue = 1;

        const { getByText } = render(<QuantitySelector value={initialValue} onSelectQuantity={mockOnSelectQuantity} />);

        const decreaseQuantity = getByText("-");

        expect(decreaseQuantity).toHaveAttribute("disabled");

        fireEvent.click(decreaseQuantity);

        expect(mockOnSelectQuantity).not.toHaveBeenCalled();
    });
});