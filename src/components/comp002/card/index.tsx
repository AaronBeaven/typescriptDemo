import React from "react";
import Comp002Data from "@dfs/cms/comp002/types";
import Box from "@mui/material/Box";
import Styles from "../../../../styles/components/Comp002.module.css";
const Card002: React.FC<Comp002Data> = ({ content }) => {
  const {
    cardImage: {
      image: { name },
    },
    cardHeading,
    _meta: { deliveryId },
  } = content;
  return (
    <div>
      <Box>
        <picture>
          <source
            media="(max-width: 1350px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${name}/?h=430&w=550&qlt=default&fmt=auto`}
          />
          <source
            media="(max-width: 780px)"
            srcSet={`https://images.dfs.co.uk/i/dfs/${name}/?h=430&w=706&qlt=default&fmt=auto`}
          />
          <img
            src={`https://images.dfs.co.uk/i/dfs/${name}/?h=317&w=317&qlt=default&fmt=auto`}
          />
        </picture>
        <h4 className={Styles.title}>{cardHeading}</h4>
      </Box>
    </div>
  );
};
export default Card002;
