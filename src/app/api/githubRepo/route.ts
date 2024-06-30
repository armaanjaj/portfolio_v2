import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.ACCESS_TOKEN;

export async function POST(req: NextRequest) {
    try {
        const { owner, repo } = await req.json();

        if (!owner || !repo) {
            return NextResponse.json(
                { message: "Owner and repo are required" },
                { status: 400 }
            );
        }

        const response = await axios.get(
            `https://api.github.com/repos/${owner}/${repo}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                },
            }
        );

        const { stargazers_count, forks_count } = response.data;

        return NextResponse.json(
            {
                stars: stargazers_count,
                forks: forks_count,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                message: "Failed to fetch repo data",
                error: error.message,
            },
            { status: 500 }
        );
    }
}
