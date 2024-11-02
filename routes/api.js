import express from "express";
const router = express.Router();
import * as blogController from  "../app/controllers/blogController.js"


router.post("/create-blog", blogController.create);

router.get("/read-blog", blogController.read);

router.put("/update-blog", blogController.update);

router.delete("/delete-blog", blogController.del);

export default router;
