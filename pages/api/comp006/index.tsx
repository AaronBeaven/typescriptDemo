// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import apiData from "@dfs/api/comp006";
import Comp006Data from "@dfs/cms/comp006/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comp006Data>
) {
  res.status(200).json(apiData);
}
