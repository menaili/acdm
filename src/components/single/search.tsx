'use client'
import React, { ChangeEvent } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const Searchbar: React.FC = () => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  return(
    <>
      <Input
        onInput={handleSearch}
        size="large"
        placeholder="Search by key words or courses" 
        style={{ color: 'gray' }} 
        prefix={<SearchOutlined />} />
    </>
  )
  
};

export default Searchbar;
