import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, default: "" },
        catSlug: { type: String, default: "general" },
        userEmail: { type: String, required: true },
        views: { type: Number, default: 0 },
    },
    { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
