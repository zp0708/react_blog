import React, { useState } from 'react';
import { Avatar, Divider, Popover } from 'antd';
import { GithubOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';

const Author = () => {
  const [githubColor, setGithubColor] = useState('#999');

  const mouseEnter = () => {
    setGithubColor('rgba(6,133,255,1)');
  };

  const mouseOut = () => {
    setGithubColor('#999');
  };

  return (
    <div className='author-div comm-box'>
      <div>
        <Avatar
          shape="square"
          size={100}
          src='http://img.mp.itc.cn/upload/20170724/cf678e09eb384401aa616ba134126357_th.jpg'
        />
      </div>
      <div className='author-introduction'>
        这是个神一样的Blog，欢迎关注ssss
        <Divider>社交帐号</Divider>
        <Popover content={<div>https://github.com/zp0708</div>} trigger='hover'>
          <a href='https://github.com/zp0708' target='_blank'>
            <GithubOutlined
              style={{ fontSize: '24px', color: githubColor }}
              className='account'
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseOut}
            />
          </a>
        </Popover>
        <Popover content={<div>zp8993537</div>} trigger='hover'>
          <WechatOutlined
            style={{ fontSize: '24px', color: '#999' }}
            className='account'
          />
        </Popover>
        <Popover content={<div>841473480</div>} trigger='hover'>
          <QqOutlined
            style={{ fontSize: '24px', color: '#999' }}
            className='account'
          />
        </Popover>
      </div>
    </div>
  );
};

export default Author;
