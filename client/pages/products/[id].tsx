import React, { useMemo, useState, useContext } from "react";
import { useRouter } from "next/router";

import { Header, Footer } from "../../layout";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Spacer } from "../../components/Spacer/Spacer";
import { QuantitySelector } from "../../components/QuantitySelector/QuantitySelector";
import { ProductDescription, ProductSpecifications } from "../../components/pages/products";
import { formatNumberCurrency } from "../../utils/formatNumberCurrency";
import { useProductByIdService } from "../../hooks/useProductByIdService";
import { ShoppingCartContext } from "../../contexts/ShoppingCart/ShoppingCartContext";
import { SHOPPING_CART_ACTION_TYPES } from "../../contexts/ShoppingCart/action-types";
import styles from "./products.module.css";

const INITIAL_ITEM_COUNT = 1;

export default function ProductDetailsPage(): React.JSX.Element | null {
    const router = useRouter();
    const { id } = router.query;

    const [quantity, setQuantity] = useState<number>(INITIAL_ITEM_COUNT);

    const { data, isLoading } = useProductByIdService(+id!);
    const { dispatch } = useContext(ShoppingCartContext);

    const specifications = useMemo(() => ([
        { label: 'Brand', value: data?.brand },
        { label: 'Item weight (g)', value: data?.weight },
        { label: 'Dimensions (cm)', value: `${data?.height} x ${data?.width} x ${data?.length}` },
        { label: 'Item Model number', value: data?.model_code },
        { label: 'Colour', value: data?.colour },
    ]), [data]);

    const productPrice = useMemo(() => formatNumberCurrency(data?.price || 0, undefined, 'GBP'), [data?.price]);

    const handleOnSelectQuantity = (quantitySelected: number) => {
        setQuantity(quantitySelected);
    }

    const handleOnAddItemToCard = () => {
        if (quantity === 0) {
            return;
        }

        const itemToBeAdded = {
            qty: quantity,
            price: data?.price!,
            total: (data?.price || 0) * quantity,
            sku: data?.id!
        };

        dispatch({
            type: SHOPPING_CART_ACTION_TYPES.ADD_ITEM_TO_CART,
            payload: {
                item: itemToBeAdded
            }
        });

        setQuantity(INITIAL_ITEM_COUNT);
    }

    if (!data || isLoading) {
        return null;
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.section}>
                <Card>
                    <Card.Image src={data.img_url} alt="Card image" aria-label="Card image" />
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Content>
                        <span className={styles.subtitle}>
                            {`${data.power} // Packet of ${data.quantity}`}
                        </span>
                        <Spacer />
                        <div className="flex-container-inline-spaced" style={{ '--alignItems': 'end' } as React.CSSProperties}>
                            <span className={styles.labelTitle}>{productPrice}</span>
                            <QuantitySelector value={quantity} onSelectQuantity={handleOnSelectQuantity} />
                        </div>
                        <Spacer />
                        <Button id="addToCart" onClick={handleOnAddItemToCard} aria-label="Add to cart" isFullWidth={true}>
                            Add to cart
                        </Button>
                    </Card.Content>
                </Card>
            </div>
            <div className={styles.section}>
                <ProductDescription>
                    {data.description}
                </ProductDescription>
            </div>
            <div className={styles.section}>
                <ProductSpecifications data={specifications} />
            </div>
            <Footer />
        </div>
    );
}
