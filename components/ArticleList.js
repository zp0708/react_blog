import React, { useState, useEffect } from 'react';
import { Row, Col, List, Icon } from 'antd';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import Router from 'next/router';

const ArticleList = (props) => {
  const [mylist, setMylist] = useState([]);

  useEffect(() => {
    requestArticleList()
  }, [])

  const requestArticleList = () => {
    console.log(props);
    axios.get(servicePath.getArticleListById + props.id).then((res)=> {
      console.log(res.data.data);
      setMylist(res.data.data)
    })
  }

  const clickArticleTitle = (articleId) => {
    Router.push({
      pathname:'/detail',
      query:{
        id: articleId
      }
    })
  }
  
  const renderItem = (item) => {
    return (
      <List.Item>
        <div className='list-title' onClick={()=>{clickArticleTitle(item.id)}}>{item.title}</div>
        <div className='list-icon'>
          <span>
            <Icon />
            {item.addTime}
          </span>
          <span>
            <Icon type='folder' />
            {item.typeName}
          </span>
          <span>
            <Icon type='fire' />
            {item.view_count}人
          </span>
        </div>
        <div className='list-context'>{item.context}</div>
      </List.Item>
    );
  }

  return (
    <div>
      <List
        header={<div>最新日志</div>}
        itemLayout='vertical'
        dataSource={mylist}
        renderItem={renderItem}
      />
    </div>
  );
};

ArticleList.getInitialProps = (context) => {
  console.log('object');
}

export default ArticleList;
