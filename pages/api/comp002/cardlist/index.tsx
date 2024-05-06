// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import apiData from "@dfs/api/comp002/cardlist";
import { Cardlist } from "@dfs/cms/comp002/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cardlist>
) {
  res.status(200).json(apiData);
}
