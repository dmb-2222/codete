import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Item from "./Item";
import styles from "./Items.module.css";

const Items = ({ paragraphs, isParagraph }) => {
  const useStyles = makeStyles({
    root: {
      marginTop: 20,
      marginBottom: 20,
      padding: 15,
    },
    list: {
      maxWidth: isParagraph ? 800 : 180,
      marginLeft: 20,
    },
  });
  const classes = useStyles();
  return (
    <div>
      <ul className={styles.items}>
        {paragraphs.map((par) => (
          <li key={par.id} className={classes.list}>
            <Card className={classes.root}>
              <Item
                title={par.title}
                text={par.text}
                id={par.id}
                isParagraph={isParagraph}
              />
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
