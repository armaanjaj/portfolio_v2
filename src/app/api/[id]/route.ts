import { dbConnect } from "@/db/dbConfig/dbConfig";
import Post from "@/db/models/Post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnect();

    const { id } = params;

    if (!id) {
        return NextResponse.json({ message: "Invalid id" }, { status: 400 });
    }

    try {
        const post = await Post.findByIdAndUpdate(
            id,
            { $inc: { views: 1 } },
            { new: true }
        );

        if (!post) {
            return NextResponse.json(
                { message: "Post not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        console.error("Error fetching post:", error);
        return NextResponse.json(
            { message: "Something went wrong!" },
            { status: 500 }
        );
    }
}
