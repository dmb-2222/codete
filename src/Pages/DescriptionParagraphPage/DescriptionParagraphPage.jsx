import React from "react";
import Items from "../../componets/Items";

const DescriptionParagraphPage = ({ paragraph }) => {
  return (
    <div>
      <Items paragraphs={paragraph} isParagraph={true} />
    </div>
  );
};

export default DescriptionParagraphPage;
