import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { getQueryParam } from "@dfs/src/functions";
import Comp006 from "@dfs/cms/comp006";

const Main006 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let contentId = getQueryParam("content");

    if (!contentId) {
      contentId = "96de01c0-2b22-4211-a588-e6970be7e5e1"; // Fallback content id if none supplied
    }

    // Amplience Dynamic content Url DFSv2 URL
    //const url = `https://76c8qrrtiabd11ltobf89e71r.staging.bigcontent.io/content/id/${contentId}?depth=all&format=inlined`;

    // static local api data (used during building content)
    const url = "http://localhost:3000/api/comp006";

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
        <title>Dynamic Component Preview</title>
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
          {data && <Comp006 content={data} />}
        </Box>
      )}
    </div>
  );
};

export default Main006;
