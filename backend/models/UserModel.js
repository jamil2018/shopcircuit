import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: String,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// eslint-disable-next-line func-names
userSchema.methods.matchPassword = async function (enteredPassword) {
  const comparisonResult = await bcrypt.compare(enteredPassword, this.password);
  return comparisonResult;
};
// eslint-disable-next-line prefer-arrow-callback
userSchema.pre("save", async function (next) {
  // eslint-disable-next-line no-invalid-this
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  // eslint-disable-next-line no-invalid-this
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
