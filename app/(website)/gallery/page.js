import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <>
      <Container className="flex flex-col w-full mx-auto justify-center py-6 items-center md:py-10 md:mt-12 lg:mt-16 lg:py-14">
       <div className="w-full h-full md:w-4/5">
          <Image
            src="/img/coming-soon-2.png"
            alt="Coming Soon"
            className="object-cover w-full rounded-xl"
          />
        </div>
       <Link href="/" className="flex items-center justify-center py-6 mx-auto text-center">
          <button type="button" class="bg-[#5377b3] rounded-lg text-lg p-4 shadow-lg md:text-xl font-medium hover:bg-pink-600">Back Home</button>
        </Link>
      </Container>
    </>
  );
}
