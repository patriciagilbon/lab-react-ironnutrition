import React from 'react';
import './App.css';
import {
  Divider, Layout, Menu,
} from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import {
  Routes, Route, Outlet,
  Link,
} from 'react-router-dom';
import DynamicFoodList from './components/DynamicFoodList';
import FoodDetails from './components/FoodDetails';

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/food/:name" element={<FoodDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layouts() {
  const year = new Date().getFullYear();
  return (
    <Layout className="layout">
      <head>
        <title>name</title>
      </head>
      <Header>
        <div className="logo" />
        <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['mail']}>
          <Menu.Item key="mail" icon={<HomeOutlined />}>
            <a href="/">FoodDiaries</a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Divider />
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {`Food diaries © ${year} Created by Paty Gilbon` }
      </Footer>
    </Layout>
  );
}

function Home() {
  return (
    <DynamicFoodList />
  );
}

function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p> We couldnt find the page you were looking for</p>
      <Link to="/">
        Go back to homepage
      </Link>
    </div>
  );
}
