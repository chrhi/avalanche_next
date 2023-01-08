import jwt from "jsonwebtoken";
import { NextApiRequest , NextApiResponse} from "next";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    console.log("here is the headers from the request")
    console.log(req.headers)
    //const verefide = jwt.verify(process.env.JWT_SECRET_KEY , )
  }
  