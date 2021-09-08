import React from 'react';
import { Grid } from '@material-ui/core';
import ShopProductCard from '@/components/_dashboard/products/ProductCard';

interface Props {
    products;
    order?;
}

const ProductList = (props: Props): JSX.Element => {
    const { products, ...other } = props;
    return (
        <Grid container spacing={3} {...other}>
            {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={3}>
                    <ShopProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
