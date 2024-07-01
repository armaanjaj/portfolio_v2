import { dbConnect } from "@/db/dbConfig/dbConfig";
import Post from "@/db/models/Post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await dbConnect();

    try {
        const posts = await Post.find({});
        console.log(posts)
        return NextResponse.json({ posts }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong!" },
            { status: 500 }
        );
    }
}
