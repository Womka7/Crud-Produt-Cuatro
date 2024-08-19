import React from 'react';

import { Container, Message, Image } from './notFoundStyles';

const NoProductsAvailable = () => {
  return (
    <Container>
      <Message>No products available</Message>
      <Image
        src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-illustration-download-in-svg-png-gif-file-formats--available-product-tokostore-pack-e-commerce-shopping-illustrations-2809510.png?f=webp" 
        alt="Not found" 
      />
    </Container>
  );
};



export default NoProductsAvailable;