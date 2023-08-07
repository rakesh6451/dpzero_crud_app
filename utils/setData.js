import { Data } from "../models/data.js";
import { ErrorUtil } from "./errorUtil.js";

export const setData = async (req, res, next) => {
    const key = req._parsedUrl.path.split("/")[1];
  
    const data = await Data.findOne({ where: { key: key } });
  
    if (!data) {
      return next(
        new ErrorUtil(
          "The provided key does not exist in the database.",
          404,
          "KEY_NOT_FOUND"
        )
      );
    }
    res.data = data;
    next();
  };