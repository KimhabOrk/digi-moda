import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";
import { CookieConsent } from "@/components/cookie-consent";

export default async function IndexPage() {
  const posts = await getAllPosts();
  return (
    <div className="min-h-screen">
      <HomePage posts={posts} />
      <CookieConsent />
    </div>
   );
}

export const revalidate = 60;
