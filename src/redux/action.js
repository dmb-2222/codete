export const Type = {
  PARAGRAPH: "PARAGRAPH",
  GET_ALL_PUBLICATIONS: "GET_ALL_PUBLICATIONS",
  GET_PARAGRAPH: "GET_PARAGRAPH",
  SEARCH: "SEARCH",
};

export const setPublications = (publications) => ({
  type: Type.GET_ALL_PUBLICATIONS,
  payload: publications,
});

export const handleCategory = (name, publications) => ({
  type: Type.PARAGRAPH,
  payload: { name, publications },
});

export const handleParagraph = (id, publications) => ({
  type: Type.GET_PARAGRAPH,
  payload: { id, publications },
});

export const handleSearch = (paragraphs, value) => ({
  type: Type.SEARCH,
  payload: {paragraphs, value},
});
