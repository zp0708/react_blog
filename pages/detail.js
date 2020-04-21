import React, { useState } from 'react';
import { Row, Col, List, Icon, Breadcrumb, Affix } from 'antd';
import Head from 'next/head';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';

import MarkdownNav from 'markdown-navbar'

import ReactMarkdown from 'react-markdown'

const Detail = () => {

  let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

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
            <div className='detail-content'>
              <ReactMarkdown 
                source={markdown}
                escapeHtml={false}
              />
            </div>
          </div>
        </Col>
        <Col className='comm-box' xs={0} sm={0} md={7} lg={5} xl={4}>
          <div>
            <Author/>
            <Advert/>
            <Affix offsetTop={5}>
            <div className='detail-navbar comm-box'>
              <div className='nav-title'>文章目录</div>
              <MarkdownNav 
                className='article-menu'
                source={markdown}
                ordered={false}
              />
            </div>
            </Affix>
          </div>
        </Col>
      </Row>
      <div><Footer/></div>
    </div>
  );
};

export default Detail;
