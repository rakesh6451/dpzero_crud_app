import express from "express";
import {
  createData,
  getData,
  updateData,
  deleteData,
} from "../controllers/dataControllers.js";
import { setData } from "../utils/setData.js";

const router = express.Router();

router.post("/", createData);
router.use(setData);
router.route("/:key").get(getData).put(updateData).delete(deleteData);

export default router;
