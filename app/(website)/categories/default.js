import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import CategoryLabel from "@/components/blog/category";

export default function Category({
  categories,
}) {
  return (
    <>
      {categories && (
        <Container>
          <div className="w-full h-auto px-5 pb-8">
            <CategoryLabel className="text-4xl font-bold" categories={category} />
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {categories.posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="grid gap-10 mt-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {categories.posts.slice(2, 14).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="square"
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link
              href="/posts"
              className="relative inline-flex items-center gap-1 px-3 py-2 pl-4 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
