import React, { useMemo } from "react";
import { useRouter } from "next/router";

import { useProductByIdService } from "../../hooks/useProductByIdService";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Spacer } from "../../components/Spacer/Spacer";
import { QuantitySelector } from "../../components/QuantitySelector/QuantitySelector";
import { ProductDescription, ProductSpecifications } from "./components";
import { formatNumberCurrency } from "../../utils/formatNumberCurrency";
import styles from "./products.module.css";

export default function ProductDetailsPage(): React.JSX.Element | null {
    const router = useRouter();
    const { id } = router.query;

    const { data } = useProductByIdService(+id!);

    const specifications = useMemo(() => ([
        { label: 'Brand', value: data?.brand },
        { label: 'Item weight (g)', value: data?.weight },
        { label: 'Dimensions (cm)', value: `${data?.height} x ${data?.width} x ${data?.length}` },
        { label: 'Item Model number', value: data?.model_code },
        { label: 'Colour', value: data?.colour },
    ]), [data]);

    const productPrice = useMemo(() => formatNumberCurrency(data?.price || 0, undefined, 'GBP'), [data?.price]);

    //TODO: Handle action when an item is added...
    const handleOnAddItemToCard = () => { }

    if (!data) {
        return null;
    }

    return (
        <div>
            <div className={styles.container}>
                {/* __HEADER__ */}
                {/* TODO: This could be extracted... */}
                <div className={styles.header}>
                    <img src={"/octopus-logo.svg"} alt="Octopus Energy Logo" width="230px" />
                    <img className={styles.cartIcon} src="/basket.svg" alt="Basket icon" />
                </div>
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
                                <QuantitySelector />
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
                {/* __FOOTER__ */}
                {/* TODO: This could be extracted... */}
                <div className={styles.section}>
                    <div className={styles.footer}>
                        <p>Octopus Energy Ltd is a company registered in England and Wales. Registered number: 09234424. Registered office: 33 Holborn, London, EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
