import React from "react";
import { MiniBarLoader } from "../Loaders";
import Link from "next/link";
import { RiStarSLine } from "react-icons/ri";
import { SocialGitHubIcon } from "@/utils/icons";
import { FiGitBranch } from "react-icons/fi";

const GitHubInfo = () => {
    const [data, setData] = React.useState({ stars: 0, forks: 0 });
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const response = await fetch("/api/githubRepo", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        owner: "armaanjaj",
                        repo: "portfolio_v2",
                    }),
                });
                const result = await response.json();
                setData({ stars: result.stars, forks: result.forks });
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    if (loading) {
        return (
            <div className="w-full flex flex-row justify-center items-center">
                <MiniBarLoader />;
            </div>
        );
    }

    return (
        <Link
            href={"https://www.github.com/armaanjaj/portfolio_v2"}
            target="_blank"
            className="w-full text-center flex flex-row justify-center items-center gap-4 text-gray-900 dark:text-neutral-50 hover:text-purple-700 dark:hover:text-purple-500 transition-colors duration-300"
        >
            <div className="flex flex-row justify-center items-center flex-nowrap gap-0">
                <RiStarSLine className="text-base" />
                <span className="text-base">{data.stars}</span>
            </div>
            <div className="flex flex-row justify-center items-center flex-nowrap gap-0">
                <FiGitBranch className="text-base" />{" "}
                <span className="text-base">{data.forks}</span>
            </div>
            <SocialGitHubIcon className="text-xl" />
        </Link>
    );
};

export default GitHubInfo;
