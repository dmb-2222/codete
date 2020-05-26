// export { default } from "./DescriptionParagraphPage";


import { connect } from "react-redux";
import DescriptionParagraphPage from "./DescriptionParagraphPage";
// Store

import { getParagraph } from "../../redux/selector";


const mapStateToProps = (state) => ({
    paragraph: getParagraph(state),
});
export default connect(mapStateToProps)(DescriptionParagraphPage);
