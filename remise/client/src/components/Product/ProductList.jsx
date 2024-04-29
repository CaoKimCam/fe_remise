import React from 'react'
import ProductItem from './ProductItem'
import { Grid } from '@mui/material'


function ProductList({productList}) {
  return (
    <Grid container spacing={2}>
        {productList.map((productItem, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2.4} >
            <ProductItem key={index} productItem={productItem} />
          </Grid>
        ))}
    </Grid>
  )
}

export default ProductList