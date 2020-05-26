import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import style from "./Item.module.css";

const Text = styled.p`
  text-overflow: ${(props) => props.isParagraph && "ellipsis"};
  white-space: ${(props) => props.isParagraph && "nowrap"};
  overflow: ${(props) => props.isParagraph && "hidden"};
`;

const Item = ({
  title,
  text,
  id,
  toChoiceParagraph,
  publications,
  isParagraph = false,
}) => {
  return (
    <>
      <p>{title}</p>
      <Text isParagraph={!isParagraph}>{text}</Text>
      {!isParagraph && (
        
        <Link
          to={`paragraph${id}`}
          onClick={() => toChoiceParagraph(id, publications)}
        >
          More
        </Link>
      )}
    </>
  );
};

export default Item;
