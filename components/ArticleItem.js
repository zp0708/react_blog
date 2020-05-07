import React from 'react';
import { List, Icon } from 'antd';
import Link from 'next/link';

const ArticleItem = (props) => {

  const item = props.article;
  const introduce = props.introduce;

  return (
    <div>
      <List.Item>
        <Link href={'/detail?id=' + item.id} className='list-title'>{item.title}</Link>
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
