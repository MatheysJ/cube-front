import { SearchBox } from "react-instantsearch";

import styles from "./styles.module.css";

const CustomAlgoliaSearchBox: React.FC = () => (
  <SearchBox
    placeholder="Digite para encontrar o que você deseja..."
    classNames={{ ...styles }}
  />
);

export default CustomAlgoliaSearchBox;
