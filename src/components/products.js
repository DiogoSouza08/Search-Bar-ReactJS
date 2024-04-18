import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BuyButton from './buyButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const Products = ({ searchTerm }) => {
  const products = [
      { id: 1, name: 'Jordan Jumpman Two Trey', image: 'https://imgnike-a.akamaihd.net/1920x1920/028463ID.jpg', price: 450 },
      { id: 2, name: 'Nike SB Dunk Low Pro', image: 'https://imgnike-a.akamaihd.net/1920x1920/02765115.jpg', price: 280},
      { id: 3, name: 'Nike Air Max TW', image: 'https://imgnike-a.akamaihd.net/1920x1920/02434682.jpg', price: 600 },
      { id: 4, name: 'Air Max 1', image: 'https://imgnike-a.akamaihd.net/1920x1920/0277413X.jpg', price: 360 },
      { id: 5, name: 'Nike SB Zoom Blazer Low Pro GT', image: 'https://imgnike-a.akamaihd.net/1920x1920/0129271E.jpg', price: 900 },
      { id: 6, name: 'Nike SB Nyjah 3', image: 'https://imgnike-a.akamaihd.net/1920x1920/023115ID.jpg', price: 400 },
      { id: 7, name: 'Tênis Nike Precision 6', image: 'https://imgnike-a.akamaihd.net/1920x1920/0221235A.jpg', price: 630 },
      { id: 8, name: 'Nike Dunk Low Retro SE', image: 'https://imgnike-a.akamaihd.net/1920x1920/02622515.jpg' , price: 800},
      { id: 9, name: 'Jordan Jumpman MVP', image: 'https://imgnike-a.akamaihd.net/1920x1920/0270685C.jpg', price: 530 },
      { id: 10, name: 'Air Jordan 1 Zoom CMFT 2', image: 'https://imgnike-a.akamaihd.net/1920x1920/024677ID.jpg', price: 400 },
      { id: 11, name: 'Air Force 1 x AMBUSH', image: 'https://imgnike-a.akamaihd.net/1920x1920/02457515.jpg', price: 850 },
      { id: 12, name: 'Nike Mac Attack', image: 'https://imgnike-a.akamaihd.net/1920x1920/0278457T.jpg', price: 600 },
      { id: 13, name: 'Nike Cortez', image: 'https://imgnike-a.akamaihd.net/1920x1920/02538551.jpg', price: 260 },
      { id: 14, name: 'Nike Air Max SC Leather', image: 'https://imgnike-a.akamaihd.net/1920x1920/028116ID.jpg' , price: 950},
      { id: 15, name: 'Nike Air Max Excee', image: 'https://imgnike-a.akamaihd.net/1920x1920/02653151.jpg', price: 760 },
      { id: 16, name: 'Nike Air Max SYSTM', image: 'https://imgnike-a.akamaihd.net/1920x1920/0228315A.jpg', price: 690 },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid item xs={2} sm={4} md={3} key={product.id}>
              <Item>
                <img src={product.image} style={{ maxWidth: '100%', height: 'auto' }} />
                <div className='pt-3 items-center justify-center flex flex-col space-y-2 md:text-lg sm:text-xl'>
                  <span>{product.name}</span>
                  <span className='font-bold text-lg'>R$ {product.price},00</span>
                  <BuyButton />
                </div>
              </Item>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box textAlign="center" p={3}>
              <span>Nenhum produto encontrado.</span>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Products;




