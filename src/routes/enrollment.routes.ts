import { Router, type Response, type NextFunction } from "express";
import { validateAdminRole, validateStaffOrAdminRole, validateTeacherOrStaffOrAdminRole, validateToken } from "../middlewares/auth.middlewares.js";
import type { AuthenticatedRequest } from "../types.js";
import Enrollment from "../models/Enrollment.model.js";
const enrollmentRouter = Router();

// GET - /api/enrollment/course/:courseId -  Get all enrollments for a course
enrollmentRouter.get("/course/:courseId", validateToken, validateTeacherOrStaffOrAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const foundEnrollment = await Enrollment.find({ course: req.params.courseId });
    res.status(200).json(foundEnrollment);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// GET - /api/class/:classId - List a class info
enrollmentRouter.get("/:enrollmentId", validateToken, validateTeacherOrStaffOrAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const foundEnrollment = await Enrollment.findById(req.params.enrollmentId);
    res.status(200).json(foundEnrollment);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// POST - /api/enrollment/:courseId - Create my enrollment for a course
enrollmentRouter.post("/:courseId", validateToken, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { discountPercent } = req.body;
  try {
    if (!req.payload) {
      return res.status(400).json({ errorMessage: "Authentication problem. Try to login again" });
    }
    const foundEnrollment = await Enrollment.create({ student: req.payload.userId, course: req.params.courseId, discountPercent });
    res.status(200).json(foundEnrollment);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// POST - /api/enrollment/:courseId/:studentId - Create an enrollment for a course
enrollmentRouter.post("/:courseId/:studentId", validateToken, validateStaffOrAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { discountPercent } = req.body;
  try {
    const foundEnrollment = await Enrollment.create({ student: req.params.studentId, course: req.params.courseId, discountPercent });
    res.status(200).json(foundEnrollment);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});


// PUT - /api/enrollment/:courseId/:studentId - Edit an enrollment for a course
enrollmentRouter.put("/:courseId/:studentId", validateToken, validateStaffOrAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const foundEnrollment = await Enrollment.findOneAndUpdate({ student: req.params.studentId, course: req.params.courseId }, { student: req.params.studentId, course: req.body.courseId, discountPercent: req.body.discountPercent });
    res.status(200).json(foundEnrollment);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

// PATCH - /api/enrollment/:courseId/:studentId - End an enrollment for a course
enrollmentRouter.patch("/:courseId/:studentId", validateToken, validateStaffOrAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const foundEnrollment = await Enrollment.findOneAndUpdate({ course: req.params.courseId, student: req.params.studentId }, { endDate: req.body.endDate });
    res.status(200).json(foundEnrollment);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});


// DELETE - /api/enrollment/:enrollmentId - Delete an enrollment for a course
enrollmentRouter.delete("/:enrollmentId", validateToken, validateAdminRole, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const foundEnrollment = await Enrollment.findByIdAndDelete(req.params.enrollmentId);
    res.status(200).json(foundEnrollment);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

export default enrollmentRouter;
