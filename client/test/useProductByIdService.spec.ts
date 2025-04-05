import { renderHook } from '@testing-library/react-hooks';

import { MarketplaceServices } from "../services/marketplace";
import { useProductByIdService } from '../hooks/useProductByIdService';

jest.mock('../services/marketplace');

describe("useProductByIdService custom hook", () => {
    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should call MarketplaceServices method properly', async () => {
        const productId = 1;

        MarketplaceServices.getProductById = jest.fn().mockResolvedValue({ Product: { id: '<ID>' } });

        const {
            result: { current },
            waitForNextUpdate,
            unmount,
        } = renderHook(() => useProductByIdService(productId));

        await waitForNextUpdate();

        expect(current.isLoading).toBe(true);
        expect(MarketplaceServices.getProductById).toHaveBeenCalledWith(productId);

        unmount();
    });
});