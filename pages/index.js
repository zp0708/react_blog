import React from 'react'
import { Button } from 'antd'
import Head from 'next/head'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
          <Head>
    <title>Home</title>
  </Head>
  <Header/>
  <div><Button>i am button</Button></div>
    </div>
  )
}

export default Home