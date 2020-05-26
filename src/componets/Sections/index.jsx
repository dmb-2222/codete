import { connect } from "react-redux";
import Sections from "./Sections";

// Store
import { handleCategory } from "../../redux/action";
import { getPuplications } from "../../redux/selector";

const mapDispatchToProps = (dispatch) => ({
  toChoiceCategory: (category, publications) =>
    dispatch(handleCategory(category, publications)),
});
const mapStateToProps = (state) => ({
  publications: getPuplications(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Sections);
