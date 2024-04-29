import React from 'react'
import ProductList from './ProductList'
import tivi from '../../resources/images/HomePage/tivi.jpg'

const tiviImage=tivi;
function ProductFeature() {
  const productList=[
    {
        id:1,
        name: 'TiviSony',
        thumbnailUrl: tiviImage,
        price: 10
    },
    {
        id:2,
        name: 'TiviSony2',
        thumbnailUrl: tiviImage,
        price: 10
    },
    {
        id:3,
        name: 'TiviSony3',
        thumbnailUrl: tiviImage,
        price: 10
    },
    {
        id:4,
        name: 'TiviSony4',
        thumbnailUrl: tiviImage,
        price: 10
    },
    {
      id:4,
      name: 'TiviSony4',
      thumbnailUrl: tiviImage,
      price: 10},
      {
        id:4,
        name: 'TiviSony4',
        thumbnailUrl: tiviImage,
        price: 10
      },
    {
        id:4,
        name: 'TiviSony4',
        thumbnailUrl: tiviImage,
        price: 10
    },
  ]
  return (
    <div>
        <ProductList productList={productList}/>
    </div>
  )
}

export default ProductFeature