import createCloudinaryMulter from "../middlewares/cloudinary.config.js"
import { Router, type NextFunction, type Request, type Response } from "express";
const uploadRouter = Router();
const uploader = createCloudinaryMulter();

// POST - /api/upload - Upload an image
uploadRouter.post("/", uploader.single("image"), (req: Request, res: Response, _next: NextFunction) => {
  if (!req.file) {
    return res.status(400).json({ errorMessage: "There was a problem uploading the image. Check image format and size" });
  }
  res.json({ imageUrl: req.file.path });
});

export default uploadRouter;