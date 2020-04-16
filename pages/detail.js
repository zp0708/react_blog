import React, { useState } from 'react';
import { Row, Col, List, Icon, Breadcrumb } from 'antd';
import Head from 'next/head';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';

const Detail = () => {

  return (
    <div>
      <Head>
        <title>博客详情页</title>
      </Head>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div>
              <Breadcrumb>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className='detai-title'>详情标题</div>
            <div className='list-icon center'>
              <span><Icon type='calendar'/>2019-09-02</span>
              <span><Icon type='folder'/>视频教程</span>
              <span><Icon type='fire'/>3434人</span>
            </div>
            <div className='detail-content'></div>
          </div>
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

export default Detail;
