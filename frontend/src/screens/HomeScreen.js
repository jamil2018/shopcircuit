import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';
import { v4 as uuidv4 } from 'uuid';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={uuidv4()} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
