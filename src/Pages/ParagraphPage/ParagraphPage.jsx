import React, { useState } from "react";
import Search from "../../componets/SearchForm";
import Items from "../../componets/Items";
import PaginationComponent from "../../componets/Pagination";

const ParagraphPage = ({ paragraphs, searchParagraph }) => {
  
  const [serchInput, setSerchInput] = useState("");
  // const [handleSubmiteText, setHandleSubmite] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 4;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const curentPosts = paragraphs.slice(indexOfFirstPost, indexOfLastPost);

  const handleInput = (e) => {
    const { value } = e.target;
    setSerchInput(value);
  };
  const handeleSubmit = (e) => {
    e.preventDefault();
    searchParagraph(paragraphs, serchInput);
    setSerchInput("");
  };

  const handleChange = (e, value) => {
    e.preventDefault();
    
    setCurrentPage(value);
  };
  return (
    <>
      <Search
        handleInput={handleInput}
        handeleSubmit={handeleSubmit}
        value={serchInput}
      />
      {paragraphs.length !== 0 && <Items paragraphs={curentPosts} />}
      <PaginationComponent
        postPerPage={postPerPage}
        totalPosts={paragraphs.length}
        currentPage={currentPage}
        handleChange={handleChange}
      />
    </>
  );
};
export default ParagraphPage;
