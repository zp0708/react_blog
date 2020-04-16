import React from 'react'
import { Avatar, Divider } from 'antd';

const Author = () => {
  return (
    <div className='author-div comm-box'>
      <div><Avatar size={100} src="http://img.mp.itc.cn/upload/20170724/cf678e09eb384401aa616ba134126357_th.jpg"/></div>
      <div className='author-introduction'>
        这是个神一样的Blog，欢迎关注ssss
        <Divider>社交帐号</Divider>
        <Avatar size={28} icon='github' className='account'/>
        <Avatar size={28} icon='qq' className='account'/>
        <Avatar size={28} icon='wechat' className='account'/>
      </div>
    </div>
  )
}

export default Author
