import React, { useState } from 'react';
import { Row, Col, List } from 'antd';
import Head from 'next/head';
import Header from '../components/Header';

const ArticleList = () => {

  const [list, setList] = useState([
    {title: 'hahaha', context: ''}
  ])

  return (
    <div>
      <Head>
        <title>List</title>
      </Head>
      <Header/>
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <List 
            bordered
            dataSource={list}
            renderItem={(item)=>{
              <List.Item>

              </List.Item>
            }}
          />
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  );
};

export default ArticleList;
