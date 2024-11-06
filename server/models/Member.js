const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// Schema to create User model
const memberSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      trim: true,
    },
    last: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    membershipFee: {
      type: Number,
      required: true,
    },
    submitDate: {
      type: Date,
      default: new Date(),
    },
    nameConcat: {
      type: String,
    },
    attend: {
      type: String,
    },
    streetAddress: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postcode: {
      type: String,
    },
    transactionId: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// memberSchema.pre("save", async function (next) {
//   if (this.isNew || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// memberSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// memberSchema.virtual('projCount').get(function () {
//   return this.projects.length;
// });

const Member = model("Member", memberSchema);

module.exports = Member;
