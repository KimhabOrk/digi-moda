import { Suspense } from "react";
import Container from "@/components/container";
import Posts from "./posts";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";

// export const runtime = "edge";

export default async function PostsPage({ searchParams }) {
  return (
    <>
      <Container className="relative">
        <h1 className="text-3xl font-semibold tracking-tight text-center dark:text-white lg:text-4xl lg:leading-snug">
          Posts
        </h1>
        <div className="text-center">
          <p className="mt-2 text-lg">
            See all posts we have ever written.
          </p>
        </div>
        <Suspense
          key={searchParams.page || "5"}
          fallback={<Loading />}>
          <Posts searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

export const revalidate = 60;
