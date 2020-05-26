// export { default } from './Item'

import { connect } from "react-redux";
import Item from "./Item";
// Store
import { handleParagraph } from "../../../redux/action";
import { getPuplications } from "../../../redux/selector";

const mapDispatchToProps = (dispatch) => ({
  toChoiceParagraph: (id, publications) =>
    dispatch(handleParagraph(id, publications)),
});
const mapStateToProps = (state) => ({
  publications: getPuplications(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Item);