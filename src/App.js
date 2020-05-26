import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {setPublications} from './redux/action'
import data from "./publications.json";

import Header from "./componets/Header";
import Sections from "./componets/Sections";
import ParagraphPage from "./Pages/ParagraphPage";
import styles from "./App.module.css";
import DescriptionParagraphPage from "./Pages/DescriptionParagraphPage";

const App = ({puplications}) => {
  useEffect(()=>{
    puplications(data)
  })
  return(
  <div className={styles.wrapper}>
    <Header />
    <Sections />
    <Switch>
      <Route path="/paragraph:id" exact component={DescriptionParagraphPage} />
      <Route path="/section:id" exact component={ParagraphPage} />
    </Switch>
  </div>
)};

const mapDispatchToProps = (dispatch) => ({
  puplications: (puplications) =>
    dispatch(setPublications(puplications)),
});
export default connect(null, mapDispatchToProps)(App);
