import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "./config/passportConfig.js";
import auth from "./routes/auth/auth.js";
import { databaseConnection } from "./config/databaseConnection.js";
import MongoStore from "connect-mongo";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

databaseConnection();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["POST", "GET"],
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
      ttl: 14 * 24 * 60 * 60,
    }),
    cookie: {
      secure: false,
      maxAge: 14 * 24 * 60 * 60,
      saveUninitialized: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth);

app.listen(port, () => {
  console.log(`connected to http://localhost:${port}`);
});
