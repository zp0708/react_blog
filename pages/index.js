import React from 'react';
import { Button, Row, Col } from 'antd';
import Head from 'next/head';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header/>
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          左侧
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  );
};

export default Home;
