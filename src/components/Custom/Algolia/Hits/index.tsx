import React from "react";
import { Hits } from "react-instantsearch";

import { CustomAlgoliaHitsProps } from "./types";
import styles from "./styles.module.css";

const CustomAlgoliaHits: React.FC<CustomAlgoliaHitsProps> = ({
  hitComponent,
}) => (
  <Hits
    classNames={{ root: styles.container, list: styles.list }}
    hitComponent={hitComponent}
  />
);

export default CustomAlgoliaHits;
