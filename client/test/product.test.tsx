import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import singleProduct from "../__fixtures__/singleProduct.json";
import { ShoppingCartProvider } from "../contexts/ShoppingCart/ShoppingCartProvider";
import ProductDetailsPage from "../pages/products/[id]";

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn().mockReturnValue({
    query: {
      id: 1
    }
  }),
}));

jest.mock('../hooks/useProductByIdService', () => ({
  useProductByIdService: jest.fn().mockReturnValue({
    data: singleProduct
  })
}));

describe('ProductDetailsPage component', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test("should be able to increase and decrease product quantity", async () => {
    const { getByText, getByTitle } = render(<ShoppingCartProvider><ProductDetailsPage /></ShoppingCartProvider>);

    const increaseQuantity = getByText("+");

    const currentQuantity = getByTitle("Current quantity");
    expect(currentQuantity).toHaveTextContent("1");

    fireEvent.click(increaseQuantity);
    expect(currentQuantity).toHaveTextContent("2");

    const decreaseQuantity = getByText("-");

    fireEvent.click(decreaseQuantity);
    expect(currentQuantity).toHaveTextContent("1");
  });

  test("should be able to add items to the basket", async () => {
    const { getByText, getByTitle, queryByTitle } = render(<ShoppingCartProvider><ProductDetailsPage /></ShoppingCartProvider>);

    const increaseQuantity = getByText("+");

    const currentQuantity = getByTitle("Current quantity");

    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent("4");

    const addToBasketElement = getByText("Add to cart");
    fireEvent.click(addToBasketElement);

    await waitFor(() => expect(queryByTitle("Basket items")).toBeInTheDocument());

    const basketItems = getByTitle("Basket items");
    expect(basketItems).toHaveTextContent("4");
  });
});

