import React from "react";
import Box from "@mui/material/Box";
import Comp006Data from "@dfs/cms/comp006/types";
import { card } from "@dfs/cms/comp006/types";
import { theme } from "@dfs/utils/theme";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Styles from "../../../styles/components/Comp006.module.css";

const Comp006: React.FC<Comp006Data> = ({ content }) => {
  // Destructure data from content
  const {
    _meta: { name: _ContentName, deliveryId },
    header,
    cards,
  } = content;

  return (
    <Container
      // maxWidth={false}
      sx={{
        marginTop: "0px",
        marginBottom: "0px",
        margin: "0",
        padding: "0 100px",
      }}
    >
      <Box
        data-contentid={deliveryId}
        className={Styles.container}
        sx={{
          // maxWidth: "1552px",
          display: "flex",
          color: theme.palette.primary.main,
          justifyContent: "space-evenly",
        }}
      >
        <Grid container spacing={1}>
          {cards.map(
            ({
              _meta,
              cardBtnLink,
              cardBtnText,
              cardHeading,
              roundel: { roundelSize },
              cardImage: {
                image: { name },
              },
            }: card) => (
              <Grid item xs={2}>
                <>
                  <div className={Styles.cardContainer}>
                    <Box
                    // component="img"
                    // sx={{
                    //   content: {
                    //     xs: `url(https://images.dfs.co.uk/i/dfs/${name}/?h=430&w=719&qlt=default&fmt=auto)`, //img src from xs up to md
                    //     md: `url(https://images.dfs.co.uk/i/dfs/${name}/?h=430&w=666&qlt=default&fmt=auto)`,
                    //   },
                    // }}
                    // alt="Logo"
                    />
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
                        className={Styles.imgGrid}
                        src={`https://images.dfs.co.uk/i/dfs/${name}/?h=430&w=666&qlt=default&fmt=auto`}
                      />
                    </picture>
                    <Box>
                      <h2 className={Styles.productTitle}> {cardHeading} </h2>
                    </Box>
                    <Box>
                      <Button variant="outlined"> {cardBtnText}</Button>
                    </Box>
                  </div>
                  {/* <p> {roundelSize} </p> */}
                </>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Comp006;
