import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";

import Pagination from "./Pagination";
import Posts from "./Posts";

const App = () => {
  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
  
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
      }
      fetchPosts();
  }, [])  

  // last: 현재 페이지에 페이지 포스트 개수를 곱한다.
  // first: 마지막 index에서 페이지 포스트 개수를 뺀다.
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  // 포스트 리스트에서 해당 페이지에서 보여줄 개수만큼 자른다.
  const currentPosts = posts?.slice(indexOfFirst, indexOfLast);

  // 페이지 버튼을 누르면 현재 페이지 번호를 알려주는 함수
  const paginate = pageNum => setCurrentPage(pageNum);

  return (
    <div>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;