import React from 'react'
import Header from '../../components/Home/Header'
import SearchBar from '../../components/Home/SearchBar'
import BlogList from '../../components/Home/BlogList'
import { blogList } from '../../config/data'

const Home = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <BlogList blogs={blogList}/>

      
    </div>
  )
}

export default Home