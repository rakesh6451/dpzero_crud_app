import { User } from "../models/user.js";
import { ErrorUtil } from "../utils/errorUtil.js";
import jwt from "jsonwebtoken";

export const validateToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new ErrorUtil("Invalid access token provided", 401, "INVALID_TOKEN")
    );
  }
  try {
    const decoded_jwt = jwt.verify(token, process.env.JWT_SECRET);
    const userObj = await User.findOne({ where: { id: decoded_jwt.id } });
    if (!userObj) {
      return next(
        new ErrorUtil("Invalid access token provided", 401, "INVALID_TOKEN")
      );
    }
    req.user = userObj;
    next();
  } catch (error) {
    next(new ErrorUtil("Invalid access token provided", 401, "INVALID_TOKEN"));
  }
};
