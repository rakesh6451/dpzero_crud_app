import { ErrorUtil } from "../utils/errorUtil.js";
import { Data } from "../models/data.js";
import expressAsyncHandler from "express-async-handler";

export const createData = expressAsyncHandler(async (req, res, next) => {
  const { key, value } = req.body;

  if (!key) {
    return next(
      new ErrorUtil(
        "The provided key is not valid or missing.",
        404,
        "INVALID_KEY"
      )
    );
  }

  if (!value) {
    return next(
      new ErrorUtil(
        "The provided value is not valid or missing.",
        404,
        "INVALID_VALUE"
      )
    );
  }

  const userObj = await Data.findOne({
    where: {
      key: req.body.key,
    },
  });

  if (userObj) {
    next(
      new ErrorUtil(
        "The provided key already exists in the database. To update an existing key, use the update API.",
        404,
        "KEY_EXISTS"
      )
    );
  }

  await Data.create(req.body);

  return res.status(200).json({
    status: "success",
    message: "Data stored successfully.",
  });
});

export const getData = expressAsyncHandler(async (req, res, next) => {
  return res.status(200).json(res.data);
});

export const updateData = async (req, res, next) => {
  Data.update(
    { value: req.body.value },
    {
      where: {
        key: req.params.key,
      },
    }
  );

  return res.status(200).json({
    status: "success",
    message: "Data updated successfully.",
  });
};

export const deleteData = expressAsyncHandler(async (req, res, next) => {
  await Data.destroy({ where: { key: req.params.key } });
  return res.status(200).json({
    status: "success",
    message: "Data deleted successfully.",
  });
});
