import { Router } from 'express';
import {
    deleteVideo,
    getAllVideos,
    getVideoById,
    publishAVideo,
    togglePublishStatus,
    updateVideo,
} from "../controllers/video.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// Apply JWT verification middleware to all routes in this file
router.use(verifyJWT);

// Route to get all videos or upload a new video with video file and thumbnail
router.route("/")
    .get(getAllVideos)
    .post(
        upload.fields([
            { name: "videoFile", maxCount: 1 },
            { name: "thumbnail", maxCount: 1 }
        ]),
        publishAVideo
    );

// Routes for actions on a specific video by ID
router.route("/:videoId")
    .get(getVideoById)            // Get details of a single video
    .delete(deleteVideo)           // Delete a specific video
    .patch(upload.single("thumbnail"), updateVideo); // Update video with new thumbnail

// Route to toggle the publish status of a video by ID
router.route("/toggle/publish/:videoId").patch(togglePublishStatus);

export default router;
