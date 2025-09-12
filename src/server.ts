// ℹ️ Loads environment variables from a .env file into process.env
try {
  process.loadEnvFile();
} catch (error: unknown) {
  if (error instanceof Error) {
    console.warn(".env file not found, using default environment values", error.message);
  } else {
    console.warn(".env file not found, using default environment values");
  }
}
// import "./config/instrument.js"
// import * as Sentry from "@sentry/node";
import express, { type Application } from "express";
import config from "./config/index.js";
import indexRouter from "./routes/index.routes.js";
import handleErrors from "./errors/index.js";
import initMongoose from "./db/index.js";

// ℹ️ Establishes a connection to the database
initMongoose();

// Imports Express (a Node.js framework for handling HTTP requests) and initializes the server
const app: Application = express();
// ℹ️ Defines the server port (default: 5005)
const PORT = process.env.PORT || 5005;

// ℹ️ Loads and applies global middleware (CORS, JSON parsing, etc.) for server configurations
config(app);

// 👇 Defines and applies route handlers
app.use("/api", indexRouter);

// ❗ Centralized error handling (must be placed after routes)
//Sentry.setupExpressErrorHandler(app);
handleErrors(app);

// 🆗 Starts the server
app.listen(PORT, () => {
  console.log(`Server listening. Local access on http://localhost:${PORT}`);
});
