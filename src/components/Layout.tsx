import React from "react";
import { stylesheet } from "typestyle";

const styles = stylesheet({
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});

export const Layout: React.FC = ({ children }) => <div className={styles.root}>{children}</div>;
