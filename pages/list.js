import React, { useState, useEffect } from 'react';
import { Row, Col, List } from 'antd';
import Head from 'next/head';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import ArticleItem from '../components/ArticleItem';
import { useRouter } from 'next/router';
import servicePath from '../config/apiUrl'
import axios from 'axios';
import marked from 'marked'
import hljs from "highlight.js";

const ArticleList = (props) => {  

  const [mylist, setMylist] = useState(props.data);

  useEffect(() => {
    setMylist(props.data);
  })

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

  return (  
    <div>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout='vertical'
              dataSource={mylist}
              renderItem={(item)=><ArticleItem article={item} introduce={marked(item.introduce)}/>}
            />
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

ArticleList.getInitialProps = async (context) => {
  const { id } = context.query;
  const promise = new Promise((resolve)=>{
    axios.get(servicePath.getArticleListById + id).then((res)=> {
      console.log(res.data);
      resolve(res.data)
    }).catch(()=>{
      console.log('请求错误');
    })
  })
  return await promise
}

export default ArticleList;
