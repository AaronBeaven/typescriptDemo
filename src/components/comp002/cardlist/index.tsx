import React from "react";
import { Cardlist002, Card, cardInner } from "@dfs/cms/comp002/types";
import Box from "@mui/material/Box";
import Styles from "../../../../styles/components/Comp002.module.css";
import Container from "@mui/material/Container";
import { theme } from "@dfs/utils/theme";
import Grid from "@mui/material/Grid";

const Cardlist002: React.FC<Cardlist002> = ({ content }) => {
  const {
    cards,
    _meta: { deliveryId },
  } = content;
  return (
    <Container
      className={Styles.container}
      sx={{
        maxWidth: "1552px",
        padding: "0 100px",
      }}
      // maxWidth={false}
    >
      <Box
        data-contentid={deliveryId}
        // className={Styles.container}
        sx={{
          width: "100%",
          display: "flex",
          color: theme.palette.primary.main,
          justifyContent: "space-evenly",
        }}
      >
        <Grid container spacing={1}>
          {cards.map(
            ({
              cardHeading,
              cardImage: {
                image: { name },
              },
            }: cardInner) => (
              <>
                <Grid item xs={6} md={3}>
                  <div className={Styles.cardContainer}>
                    <Box />
                    <div>
                      <Box>
                        <picture>
                          <source
                            media="(max-width: 1350px)"
                            srcSet={`https://images.dfs.co.uk/i/dfs/${name}/?h=250&w=250&qlt=default&fmt=auto`}
                          />
                          <source
                            media="(max-width: 780px)"
                            srcSet={`https://images.dfs.co.uk/i/dfs/${name}/?h=316&w=316&qlt=default&fmt=auto`}
                          />
                          <img
                            src={`https://images.dfs.co.uk/i/dfs/${name}/?h=316&w=316&qlt=default&fmt=auto`}
                          />
                        </picture>
                      </Box>
                    </div>
                    <Box>
                      <h4 className={Styles.title}>{cardHeading}</h4>
                    </Box>
                  </div>
                </Grid>
              </>
            )
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Cardlist002;
