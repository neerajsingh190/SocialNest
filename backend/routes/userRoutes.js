import express from "express";
import {
	signupUser,
	loginUser,
	logoutUser,
	followUnFollowUser,
	updateUser,
	getSuggestedUsers,
	getUserProfile,
	freezeAccount
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

//to define routes.
// allows you to create modular route handlers in Express.js.
//  This approach helps organize your code by grouping related routes together,
//   improving maintainability and readability. 
const router = express.Router();

router.get("/profile/:query", getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser); // Toggle state(follow/unfollow)
router.put("/update/:id", protectRoute, updateUser);
router.put("/freeze", protectRoute, freezeAccount);

export default router;