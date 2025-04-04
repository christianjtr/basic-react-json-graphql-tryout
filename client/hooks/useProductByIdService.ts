import { useEffect, useState, useCallback } from "react";
import { MarketplaceServices } from "../services/marketplace";
import type { Marketplace } from "../services/marketplace/product/types";

interface UseProductByIdService {
    isLoading: boolean;
    data: Marketplace.Product['Product'] | null;
    error: unknown;
    refetch: () => Promise<void>;
}

const useProductByIdService = (id: number): UseProductByIdService => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Marketplace.Product['Product'] | null>(null);
    const [error, setError] = useState<unknown>();

    const getProductByIdService = useCallback(async () => {
        try {
            setIsLoading(true);
            const { Product } = await MarketplaceServices.getProductById(id);
            setData(Product);
        } catch (error) {
            console.error(`[GET_ERROR_BY_ID]: An error has occurred`, error);
            setError(error);
            throw (error);
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            getProductByIdService();
        }
    }, [id]);

    return {
        isLoading,
        data,
        error,
        refetch: getProductByIdService
    }
}

export { useProductByIdService };