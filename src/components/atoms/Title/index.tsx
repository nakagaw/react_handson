import * as React from "react";
const styles = require("./styles.scss");

const Title = ({children}) =>
  <h1 className={styles.title}>{children}</h1>

export default Title;