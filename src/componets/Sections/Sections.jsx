import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Sections.module.css";
import Button from "@material-ui/core/Button";

const Sections = ({ toChoiceCategory, publications }) => {
  const history = useHistory();
  const onClickLink = (e) => {
    const { name } = e.currentTarget;
    toChoiceCategory(name.slice(1), publications);
    if(name!==history.location.pathname){
      history.push(name);
    } 
    
  };
  return (
    <div className={styles.container}>
      <Button
        variant="contained"
        color="primary"
        name="/section1"
        onClick={onClickLink}
      >
        Sections 1
      </Button>
      <Button
        variant="contained"
        color="primary"
        name="/section2"
        onClick={onClickLink}
      >
        Sections 2
      </Button>
      <Button
        variant="contained"
        color="primary"
        name="/section3"
        onClick={onClickLink}
      >
        Sections 3
      </Button>
    </div>
  );
};
export default Sections;
