import { connect } from "react-redux";
import ParagraphPage from "./ParagraphPage";
// Store
import { getParagraphReducer } from "../../redux/selector";
import {handleSearch} from '../../redux/action'

const mapStateToProps = (state) => ({
  paragraphs: getParagraphReducer(state),
});


const mapDispatchToProps = (dispatch) => ({
  searchParagraph: (paragraphs, value) =>
    dispatch(handleSearch(paragraphs, value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ParagraphPage);
