import React from "react";
import { Pagination } from "react-instantsearch";

import { CustomAlgoliaPaginationProps } from "./types";
import styles from "./styles.module.css";

const CustomAlgoliaPagination: React.FC<CustomAlgoliaPaginationProps> = () => {
  return <Pagination classNames={{ ...styles }} />;
};

export default CustomAlgoliaPagination;
