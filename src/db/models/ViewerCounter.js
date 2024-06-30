import mongoose from "mongoose";

const viewerSchema = new mongoose.Schema({
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: "30m" },
});

const Viewer = mongoose.models.Viewer || mongoose.model("Viewer", viewerSchema);

export default Viewer;
