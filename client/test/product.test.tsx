import { render, fireEvent } from "@testing-library/react";
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
    data: {
      "id": "1",
      "name": "Energy saving light bulb",
      "power": "25W",
      "description": "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb.",
      "price": 12.99,
      "quantity": 4,
      "brand": "Philips",
      "weight": 77,
      "height": 12.6,
      "width": 6.2,
      "length": 6.2,
      "model_code": "E27 ES",
      "colour": "Cool daylight",
      "img_url": "https://i.ibb.co/2nzwxnQ/bulb.png"
    }
  })
}));

describe('ProductDetailsPage component', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });


  test("should be able to increase and decrease product quantity", async () => {
    const { getByText, getByTitle } = render(<ProductDetailsPage />);

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
    const { getByText, getByTitle } = render(<ProductDetailsPage />);

    const increaseQuantity = getByText("+");

    const currentQuantity = getByTitle("Current quantity");

    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent("4");

    const addToBasketElement = getByText("Add to cart");
    fireEvent.click(addToBasketElement);

    const basketItems = getByTitle("Basket items");
    expect(basketItems).toHaveTextContent("4");
  });
});

