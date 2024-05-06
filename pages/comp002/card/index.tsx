import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { getQueryParam } from "@dfs/src/functions";
import Card002 from "@dfs/cms/comp002/card";

const Comp002 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let contentId = getQueryParam("content");

    if (!contentId) {
      contentId = "1883dc50-801a-41e5-97cb-1dc5f3c88533"; // Fallback content id if none supplied
    }

    // Amplience Dynamic content Url DFSv2 URL
    //const url = `https://76c8qrrtiabd11ltobf89e71r.staging.bigcontent.io/content/id/${contentId}?depth=all&format=inlined`;

    // static local api data (used during building content)
    const url = "http://localhost:3000/api/comp002/card";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.content) {
          setData(data.content);
          setLoading(false);
          console.table({ content: data.content });
        } else {
          console.error(
            "Error: retrieving content, ensure your IP is whitelisted."
          );
        }
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Comp 002 Card</title>
      </Head>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
          }}
        >
          <Typography variant="body2">
            Loading Content, please wait ..
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
          }}
        >
          {data && <Card002 content={data} />}
        </Box>
      )}
    </div>
  );
};

export default Comp002;
