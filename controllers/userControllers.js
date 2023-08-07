import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import { ErrorUtil } from "../utils/errorUtil.js";
import { User } from "../models/user.js";

export const registerUser = expressAsyncHandler(async (req, res, next) => {
  const { username, email, password, full_name, age, gender } = req.body;

  if (!username || !email || !password || !full_name || !age || !gender) {
    next(
      new ErrorUtil(
        "Invalid request. Please provide all required fields: username, email, password, full_name, age, gender",
        404,
        "INVALID_REQUEST"
      )
    );
  }

  const userObj = await User.create(req.body);
  delete userObj["password"];

  res.status(200).json({
    status: "success",
    message: "User successfully registered!",
    data: userObj,
  });
});

export const loginUser = expressAsyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next(new ErrorUtil(
      "Missing fields. Please provide both username and password.",
      404,
      "MISSING_FIELDS"
    ));
  }

  const userObj = await User.findOne({
    where: {
      [Op.and]: [{ username: username }, { password: password }],
    },
  });

  if (!userObj) {
    next(
      new ErrorUtil(
        "Invalid credentials. The provided username or password is incorrect.",
        404,
        "INVALID_CREDENTIALS"
      )
    );
  }

  return res.status(200).json({
    status: "success",
    message: "Access token generated successfully.",
    data: {
      access_token: jwt.sign(
        {
          id: userObj.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "15m",
        }
      ),
    },
  });
});