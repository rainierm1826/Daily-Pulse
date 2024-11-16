import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173",
    successRedirect: "http://localhost:5173",
  })
);

router.get("/user", (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
    return res.status(200).json({
      status: true,
      user: req.user,
    });
  }
  return res.status(401).json({
    status: false,
    user: null,
  });
});

router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ status: false, message: "Error logout" });
    }
    res.clearCookie("connect.sid");
    return res
      .status(200)
      .json({ status: true, message: "Logout Successfully" });
  });
});

export default router;
