import { Router, type Request, type Response, type NextFunction } from "express";
import { Resend } from "resend";
const emailRouter = Router();

// GET - /api/email - List all users
emailRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, subject, message } = req.body;
  try {
    const { data, error } = await resend.emails.send({
      from: "webcontact@academiagauss.es",
      to: "carlos@carlosca.net",
      replyTo: email,
      subject: subject,
      html: `<p>${name} wants more information</p><br />
            <p>${message}</p>
            <p>---</p>
            <p>Send from gauss academy webapp from Resend</p>`
    });
    if (error) {
      return res.status(400).json(error);
    }
    res.status(200).json(data);
  } catch (error: unknown) {
    console.log(error);
    next(error);
  }
});

export default emailRouter;
