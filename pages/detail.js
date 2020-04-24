import React, { useState } from 'react';
import { Row, Col, List, Icon, Breadcrumb, Affix } from 'antd';
import Head from 'next/head';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import MarkdownNav from 'markdown-navbar';
import marked from 'marked';
import hljs from 'highlight.js';
import axios from 'axios';
import servicePath from '../config/apiUrl';

const Detail = (props) => {

  const [detail, setDetail] = useState(props)

  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    padantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  let html = marked(props.content)

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
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>{props.typeName}</Breadcrumb.Item>
                <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className='detai-title'>详情标题</div>
            <div className='list-icon center'>
              <span><Icon type='calendar'/>{detail.addTime}</span>
              <span><Icon type='folder'/>{detail.typeName}</span>
              <span><Icon type='fire'/>{detail.view_count}人</span>
            </div>
            <div className='detail-content' dangerouslySetInnerHTML={{__html: html}}>

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
                source={detail.content}
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

Detail.getInitialProps = async(context) => {
  const id = context.query.id
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleById+id).then((
      (res)=>{
        resolve(res.data.data[0])
      }
    ))
  })
  return await promise
}

export default Detail;
