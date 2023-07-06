import React from "react";

import styles from "./MainLayout.module.scss";

type Props = {
  children?: React.ReactNode
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      {children}
    </div>
  );
}