import React from "react";
import styled from "styled-components";

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  
  // 포스트 수에 따른 페이지 수 계산
  const pageNumbers = [...Array(totalPosts / postsPerPage)].map((v, i) => i + 1)
  
  return (
    <div>
      <div>
        <PageNum>
          {pageNumbers.map(num => (
            <li key={num}>
              <a onClick={() => paginate(num)} href='!#'>
                {num}
              </a>
            </li>
          ))}
        </PageNum>
      </div>
    </div>
  );
}

export default Pagination;

const PageNum = styled.ul`
  display: flex;

  list-style: none;

  li {
    margin-right: 10px;
    font-size: 20px;
  }
`;