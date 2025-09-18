import { Router, type Response, type NextFunction } from "express";
import { validateAdminRole, validateTeacherOrStaffOrAdminRole, validateToken } from "../middlewares/auth.middlewares.js";
import type { AuthenticatedRequest } from "../types.js";
import Class from "../models/Class.model.js";
const classRouter = Router();

// GET- /api/class/course/:courseId - List all classes from a course
classRouter.get("/course/:courseId", validateToken, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const foundClass = await Class.find({ course: req.params.courseId }).populate("course", "name");
    res.status(200).json(foundClass);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// GET - /api/class/:classId - List a class info
classRouter.get("/:classId", validateToken, validateTeacherOrStaffOrAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const foundClass = await Class.findById(req.params.classId);
    res.status(200).json(foundClass);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// POST- /api/class/:courseId - Create a class for a course
classRouter.post("/:courseId", validateToken, validateTeacherOrStaffOrAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { course, teachers, numberOfHours, date, type, onlineUrl, classroomName } = req.body;
  try {
    const foundClass = await Class.create({ course, teachers, numberOfHours, date, classType: type, onlineUrl, classroomName });
    res.status(200).json(foundClass);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});


// PUT- /api/class/:classId - Edit a class for a course
classRouter.put("/:classId", validateToken, validateTeacherOrStaffOrAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { course, teachers, numberOfHours, date, type, onlineUrl, classroomName } = req.body;
  try {
    const foundClass = await Class.findByIdAndUpdate(req.params.classId, { course, teachers, numberOfHours, date, classType: type, onlineUrl, classroomName });
    res.status(200).json(foundClass);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// DELETE- pi/class/:classId - Delete a class for a course
classRouter.delete("/:classId", validateToken, validateAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const foundCourse = await Class.findByIdAndDelete(req.params.classId);
    res.status(200).json(foundCourse);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

export default classRouter;
