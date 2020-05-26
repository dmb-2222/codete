import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import styles from "styled-components";
const MyPagination = styles(Pagination)`.MuiPagination-ul {    display: flex;
    justify-content: center;}`;
const PaginationComponent = ({
  postPerPage,
  totalPosts,
  currentPage,
  handleChange,
}) => {
  let pageNumber = null;
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber = i;
  }

  return (
    <>
      {!!totalPosts && (
        <MyPagination
          count={pageNumber}
          onChange={handleChange}
          page={currentPage}
        />
      )}
    </>
  );
};

export default PaginationComponent;
