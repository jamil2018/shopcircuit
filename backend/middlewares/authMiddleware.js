import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // eslint-disable-next-line prefer-destructuring
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(401);
      throw new Error("Unauthorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Unauthorized, No token found.");
  }
});

// eslint-disable-next-line import/prefer-default-export
export { protect };
