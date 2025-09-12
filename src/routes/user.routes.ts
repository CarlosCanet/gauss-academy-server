import { Router, type Response, type NextFunction } from "express";
import User from "../models/User.model.js";
import { validateAdminRole, validateToken } from "../middlewares/auth.middlewares.js";
import type { AuthenticatedRequest } from "../types.js";
const userRouter = Router();

// GET - /api/user - List all users
userRouter.get("/", validateToken, validateAdminRole, async (_req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// GET - /api/user/students - List all students
userRouter.get("/students", validateToken, validateAdminRole, async (_req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const students = await User.find({ role: "Student" });
    res.status(200).json(students);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// GET - /api/user/students?enrollment=active - List all students enrolled

// GET - /api/user/students/:courseId - List all students in a course

// GET - /api/user/teachers - List all teachers
userRouter.get("/teachers", validateToken, validateAdminRole, async (_req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const teachers = await User.find({ role: "Teacher" });
    res.status(200).json(teachers);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// GET - /api/user/staff - List all staff
userRouter.get("/staff", validateToken, validateAdminRole, async (_req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const staff = await User.find({ role: "Staff" });
    res.status(200).json(staff);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// GET - /api/user/profile - Get my private info
userRouter.get("/profile", validateToken, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.payload) {
      return res.status(400).json({ errorMessage: "Token payload missing" });
    }
    const foundUser = await User.findById(req.payload.userId);
    res.status(200).json(foundUser);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// PUT - /api/user/:userId - Edit my profile
userRouter.put("/profile", validateToken, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { firstName, lastName, dateOfBirth, email, password, dni, mobileNumber, profileImageUrl } = req.body;
  try {
    if (!req.payload) {
      return res.status(400).json({ errorMessage: "Token payload missing" });
    }
    const foundUser = await User.findByIdAndUpdate(req.payload.userId, { firstName, lastName, dateOfBirth, email, password, dni, mobileNumber, profileImageUrl });
    res.status(200).json(foundUser);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// PATCH - /api/user/:userId/role/:newRole - Change the role
userRouter.patch("/:userId/role/:newRole", validateToken, validateAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const foundUser = await User.findByIdAndUpdate(req.params.userId, { role: req.params.newRole });
    res.status(200).json(foundUser);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

export default userRouter;
