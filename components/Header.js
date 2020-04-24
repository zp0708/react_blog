import React, { useState, useEffect } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import servicePath from '../config/apiUrl';
import axios from 'axios'
import Link from 'next/link'
import Router from 'next/router'

const Header = () => {

  const [navArray, setNavArray] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(
        (res) => {
          setNavArray(res.data.data)
          return res.data.data
        }
      )
      setNavArray(result)
    }
    fetchData()
  }, [])

  const didClickedItem = (e) => {
    if (e.key === '0') {
      Router.push('/index');
    } else {
      Router.push({pathname: '/list', query: {id: e.key}});
    }
  }

  return (
    <div className='header'>
      <Row type='flex' justify='center'>
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className='header-logo'>zp</span>
          <span className='header-tex'> a wandful blog</span>
        </Col>
        <Col className='menu-div' xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode='horizontal' onClick={didClickedItem}>
              <Menu.Item key="0">
                  <Icon/>首页
              </Menu.Item>
            {
              navArray.map((item, index) => {
                 return (
                  <Menu.Item key={item.id}>
                  <Icon type={item.icon}/>{item.typeName}
                  </Menu.Item>
                 )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header
