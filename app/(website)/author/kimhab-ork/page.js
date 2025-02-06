import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

export default function Kimhab() {
  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            Author
          </h1>
          <div className="grid grid-cols-1 content-center gap-4 px-0 py-4">
            <div className="hero-content justity-center flex flex-col">
              <figure className="flex items-center justify-center rounded-full pb-6">
                <Image
                  src="/img/kimhab.jpg"
                  className="max-w-sm rounded-full bg-cover bg-center"
                  alt="Kimhab Ork"
                />
              </figure>
              <div className="flex-col py-2">
                <h1 className="text-center text-xl font-bold text-gray-700 dark:text-white md:text-2xl lg:text-4xl lg:leading-snug">
                  KIMHAB ORK
                </h1>
                <div className="mx-6 mt-4 justify-center text-pretty px-2 text-center text-lg text-gray-700 dark:text-white md:text-xl lg:text-2xl lg:leading-snug">
                  <p className="w-auto">
                    A fashion designer and educator who has made
                    significant contributions to the fashion world.
                    With a diverse educational background and a blend
                    of business acumen and artistic flair. Currently,
                    He is sharing his knowledge as a lecturer at two
                    prestigious universities, inspiring the next
                    generation of fashion designers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← View all posts
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
