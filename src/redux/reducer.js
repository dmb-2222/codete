import { Type } from "./action";

export const publicationsReducer = (state = [], action) => {
  switch (action.type) {
    case Type.GET_ALL_PUBLICATIONS:
      return action.payload;
    default:
      return state;
  }
};

export const paragraphReducerFilter = (state = [], action) => {
  switch (action.type) {
    case Type.PARAGRAPH:
      return action.payload.publications.filter(
        (par) => par.section === action.payload.name
      );
    case Type.SEARCH:
      return action.payload.paragraphs.filter(
        (par) =>
          par.title.includes(action.payload.value) ||
          par.text.includes(action.payload.value)
      );
    default:
      return state;
  }
};

export const paragraphReducer = (state = [], action) => {
  switch (action.type) {
    case Type.GET_PARAGRAPH:
      return action.payload.publications.filter(
        (par) => par.id === action.payload.id
      );
    default:
      return state;
  }
};
