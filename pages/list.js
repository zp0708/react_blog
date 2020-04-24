import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import Head from 'next/head';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import ArticleList from '../components/ArticleList';
import { useRouter } from 'next/router';

const List = () => {  

  const router = useRouter();

  return (  
    <div>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <ArticleList id={router.query.id}/>
        </Col>
        <Col className='comm-box' xs={0} sm={0} md={7} lg={5} xl={4}>
          <div>
            <Author/>
            <Advert/>
          </div>
        </Col>
      </Row>
      <div><Footer/></div>
    </div>
  );
};

export default List;
