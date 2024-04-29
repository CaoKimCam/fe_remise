import React from 'react'

import SliderComponent from '../../components/SliderComponent/SliderComponent';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Button from '@mui/material/Button';
import { Grid, Typography} from '@mui/material';
import ProductFlashSale from '../../components/HomePage/ProductFlashSale';
import ProductFeature from '../../components/Product/ProductFeature';
import HeroPage from '../../components/HeaderComponent/HeroPage';
import Category from '../../components/HeaderComponent/Category/Category';
import { pink } from '@mui/material/colors';

function FlashSale(){
  return (
      <Grid mt={5}>
        <Grid sx={{display: 'flex'}} mb={1} padding={0.5}>
          <FlashOnIcon sx={{color: 'red', height:'auto', width:'40px'}}/>
          <Typography sx={{mr:1, color:'red'}} variant='h4'>Flash Sale</Typography>
          <Grid>
            <Typography variant='h4'>06</Typography>
          </Grid>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}

function Deals(){
  return (
      <Grid mt={5}>
        <Grid sx={{display: 'flex'}} mb={1}>
          <Typography color='primary' sx={{mr:1}} variant='h5'>Deals of the Day</Typography>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}

function BestSales(){
  return (
    <Grid mt={5}>
        <Grid sx={{display: 'flex'}} mb={1}>
          <Typography color={'primary'} sx={{mr:1}} variant='h5'>Best Selling Products</Typography>
        </Grid>
        <ProductFeature/>
      </Grid>
    )
}



function HomePage() {
  return (
    <Grid>
      <HeroPage id="hero"
      />
      <Grid m={12}>
        <Category/>
        <Grid>
            <SliderComponent/> 
        </Grid>
        <Grid>
          <FlashSale ></FlashSale>
          <BestSales></BestSales>
          <Deals></Deals>
        </Grid>
      </Grid>
     
      <div id="footer">
      </div>
    </Grid>
  )
}

export default HomePage