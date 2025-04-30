import { SearchBox } from "react-instantsearch";

import { CustomAlgoliaSearchBoxProps } from "./types";
import styles from "./styles.module.css";

const CustomAlgoliaSearchBox: React.FC<CustomAlgoliaSearchBoxProps> = () => {
  return <SearchBox classNames={{ ...styles }} />;
};

export default CustomAlgoliaSearchBox;
