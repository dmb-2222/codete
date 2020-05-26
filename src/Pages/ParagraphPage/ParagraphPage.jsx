import React, { useState } from "react";
import Search from "../../componets/SearchForm";
import Items from "../../componets/Items";
import PaginationComponent from "../../componets/Pagination";

const ParagraphPage = ({ paragraphs, searchParagraph }) => {
  const [serchInput, setSerchInput] = useState("");
  const [handleSubmite, setHandleSubmite] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerge] = useState(4);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const curentPosts = paragraphs.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (e, value) => {
    e.preventDefault();
    setCurrentPage(value);
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setSerchInput(value);
  };
  const handeleSubmit = (e) => {
    e.preventDefault();
    setHandleSubmite(serchInput);
    searchParagraph(paragraphs, handleSubmite);
    setSerchInput("");
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
