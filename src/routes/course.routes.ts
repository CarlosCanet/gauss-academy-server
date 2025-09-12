import { Router, type Response, type NextFunction } from "express";
import { validateAdminRole, validateToken } from "../middlewares/auth.middlewares.js";
import type { AuthenticatedRequest } from "../types.js";
import Course from "../models/Course.model.js";
const courseRouter = Router();

// GET - /api/course - List all courses
// GET - /api/course?status=active - List all active courses
courseRouter.get("/", validateToken, validateAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    if (req.query.status) {
      const activeCourses = await Course.find({ status: "active" });
      return res.status(200).json(activeCourses);
    }
    const allCourses = await Course.find();
    res.status(200).json(allCourses);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// POST - /api/course - Create a new course
courseRouter.post("/", validateToken, validateAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { name, imageUrl, degreeNames, startDate, endDate, numberOfHours, teachers, classes, price } = req.body;
  try {
    const foundCourse = await Course.create({ name, imageUrl, degreeNames, startDate, endDate, numberOfHours, teachers, classes, price });
    res.status(200).json(foundCourse);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// PUT - /api/course/:courseId - Edit a course
courseRouter.put("/:courseId", validateToken, validateAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { name, imageUrl, degreeNames, startDate, endDate, numberOfHours, teachers, classes, price } = req.body;
  try {
    const foundCourse = await Course.findByIdAndUpdate(req.params.courseId, { name, imageUrl, degreeNames, startDate, endDate, numberOfHours, teachers, classes, price });
    res.status(200).json(foundCourse);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// DELETE -/api/course/:courseId - Delete a course
courseRouter.delete("/:courseId", validateToken, validateAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const foundCourse = await Course.findByIdAndDelete(req.params.courseId);
    res.status(200).json(foundCourse);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

export default courseRouter;
