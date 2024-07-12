import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetails = ({ product }) => {

  
  if (!product) return <div>Loading...</div>;

  return (
    <Card style={{ margin: '20px' }}>
      <CardContent>
        <Typography variant="h5">{product.productName}</Typography>
        <Typography variant="body1">Company: {product.company}</Typography>
        <Typography variant="body1">price: ${product.price}</Typography>
        <Typography variant="body1">rating: {product.rating} / 7</Typography>
        <Typography variant="body1">discount: {product.discount}%</Typography>
        <Typography variant="body1">availability: {product.availability ? 'Stock' : 'Out stock'}</Typography>
      </CardContent>
    </Card>
  );
};



export default ProductDetails;