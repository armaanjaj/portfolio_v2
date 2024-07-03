import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConfig/dbConfig";
import Viewer from "@/db/models/ViewerCounter";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function GET() {
    await dbConnect();

    // Count the total number of documents in the collection
    const documentCount = await Viewer.countDocuments();

    let viewerNumber;
    if (documentCount % 10 === 0 && documentCount !== 0) {
        // Pull the last viewer number before deletion
        const lastViewer = await Viewer.findOne().sort({ _id: -1 });
        viewerNumber = lastViewer ? lastViewer.viewerNumber + 1 : 1;

        // Find the last 10 documents and delete them
        const viewersToDelete = await Viewer.find().sort({ _id: -1 }).limit(10);
        const viewerIdsToDelete = viewersToDelete.map((viewer) => viewer._id);
        await Viewer.deleteMany({ _id: { $in: viewerIdsToDelete } });
    } else {
        const lastViewer = await Viewer.findOne().sort({ _id: -1 });
        viewerNumber = lastViewer ? lastViewer.viewerNumber + 1 : 1;
    }

    const token = jwt.sign(
        { viewerNumber, timestamp: Date.now() },
        JWT_SECRET,
        {
            expiresIn: "30m",
        }
    );

    const viewer = new Viewer({ token, viewerNumber });
    const savedViewer = await viewer.save();

    return NextResponse.json({
        message: "Viewer saved successfully.",
        success: true,
        savedViewer,
    });
}
