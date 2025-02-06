import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="mb-3 mt-2 text-center text-3xl font-semibold tracking-tight text-white dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center text-black dark:prose-invert dark:text-white">
        <p>
          DiGi Moda was established with the core belief that fashion
          serves as a universal language that transcends boundaries,
          cultures, and identities. Fashion&apos;s true essence lies
          in its power to bring people together, fostering a sense of
          unity and belonging that extends beyond the surface.
        </p>
        <p>
          Our goal is clear yet impactful: to provide a platform where
          fashion enthusiasts from diverse backgrounds can unite to
          celebrate the creativity, innovation, and inclusivity that
          characterize the fashion world. The name &quot;DiGi
          Moda&quot; combines &quot;DiGi&quot; from digital and
          &quot;Moda&quot; from Italian, meaning Fashion. It embodies
          fashion in the digital era, signifying the close
          relationship between fashion and technology and their
          influence on society and individuals&apos; lives. What
          distinguishes DiGi Moda is our unwavering dedication to
          showcasing fashion in its most authentic form. We are
          committed to not only featuring the latest trends but also
          highlighting the stories, ideas, and voices that shape them.
          From up-and-coming designers with fresh perspectives to
          individuals who challenge conventional style norms, our
          magazine serves as a platform for those who embrace
          uniqueness.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
