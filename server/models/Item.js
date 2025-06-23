import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Item name is required"],
      trim: true,
    },
    category: {
      type: String,
      enum: [
        "Dairy",
        "Meat",
        "Vegetables",
        "Fruits",
        "Grains",
        "Pantry",
        "Frozen",
        "Other",
      ],
      default: "Other",
    },
    quantity: {
      type: Number,
      default: 1,
      min: [0, "Quantity cannot be negative"],
    },
    unit: {
      type: String,
      default: "piece",
    },
    expirationDate: {
      type: Date,
      required: [true, "Expiration date is required"],
    },
    location: {
      type: String,
      default: "Pantry",
    },
    isExpired: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

itemSchema.pre("save", function (next) {
  this.isExpired = this.expirationDate < new Date();
  next();
});

itemSchema.methods.getDaysUntilExpiration = function () {
  const today = new Date();
  const expiration = new Date(this.expirationDate);
  const diffTime = expiration - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export default mongoose.model("Item", itemSchema);
