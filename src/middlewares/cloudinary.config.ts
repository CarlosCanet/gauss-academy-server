import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import type { Options as CloudinaryStorageOptions } from "multer-storage-cloudinary";
import multer from "multer";

function createCloudinaryMulter() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
    api_key: process.env.CLOUDINARY_API_KEY as string,
    api_secret: process.env.CLOUDINARY_API_SECRET as string
  });
  
  const config = {
    cloudinary,
    params: {
      folder: "my-app",
      allowed_formats: ["jpg", "png"],
    },
  } as CloudinaryStorageOptions;
  
  const storage = new CloudinaryStorage(config);
  return multer({ storage });
}

export default createCloudinaryMulter;