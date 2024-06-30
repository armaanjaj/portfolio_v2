import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConfig/dbConfig";
import Viewer from "@/db/models/ViewerCounter";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function GET() {
    await dbConnect();

    const lastViewer = await Viewer.findOne().sort({ _id: -1 });

    const viewerNumber =
        lastViewer && lastViewer.viewerNumber ? lastViewer.viewerNumber + 1 : 1;

    const token = jwt.sign(
        { viewerNumber, timestamp: Date.now() },
        JWT_SECRET,
        {
            expiresIn: "30m",
        }
    );

    const newViewer = new Viewer({ token, viewerNumber });
    await newViewer.save();

    return NextResponse.json({ viewerNumber, token });
}
