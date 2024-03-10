import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const Searchbar: React.FC = () => (
  <>
    <Input size="large" placeholder="Search by key words or courses" style={{ color: 'gray' }} prefix={<SearchOutlined />} />
  </>
);

export default Searchbar;
