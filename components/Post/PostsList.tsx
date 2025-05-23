import { GetPostsQueryResult } from "@/sanity.types"
import { getSiteSettings } from "@/sanity/lib/siteSettings/getSiteSettings"

import { ClerkLoaded } from "@clerk/nextjs";
import Post from "./Post";
import FilterByTierSelect from "../FilterByTierSelect";


async function PostsList({ posts }: { posts: GetPostsQueryResult }) {
    const siteSettings = await getSiteSettings();

    return (
        <section className="my-8 px-4">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-bold mb-8 text-center">
                    Recent Posts by {siteSettings?.siteTitle}
                </h2>

                <div className="flex justify-center items-center mb-4">
                    <FilterByTierSelect />
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <ClerkLoaded>
                        {posts.map((post, index) => (
                            <Post key={index} post={post} />
                        ))}
                    </ClerkLoaded>
                </div>
            </div>
        </section>
    )
}
export default PostsList;