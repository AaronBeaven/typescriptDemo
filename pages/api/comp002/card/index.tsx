// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import apiData from "@dfs/api/comp002/card";
import Comp002Data from "@dfs/cms/comp002/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comp002Data>
) {
  res.status(200).json(apiData);
}
