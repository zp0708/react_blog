import React from 'react';
import { List, Icon } from 'antd';
import Router from 'next/router';

const ArticleItem = (props) => {

  const item = props.article;
  const introduce = props.introduce;

  const clickArticleTitle = (articleId) => {
    Router.push({
      pathname:'/detail',
      query:{
        id: articleId
      }
    })
  }

  return (
    <div>
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
        <div className='list-context' dangerouslySetInnerHTML={{__html: introduce}}></div>
      </List.Item>
    </div>
  );
};

export default ArticleItem;
