import { SearchBox } from "react-instantsearch";

import { CustomAlgoliaSearchBoxProps } from "./types";
import styles from "./styles.module.css";

const CustomAlgoliaSearchBox: React.FC<CustomAlgoliaSearchBoxProps> = () => (
  <SearchBox
    placeholder="Digite para encontrar o que você deseja..."
    classNames={{ ...styles }}
  />
);

export default CustomAlgoliaSearchBox;
