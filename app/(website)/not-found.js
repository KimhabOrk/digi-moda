import Container from "@/components/container";
import { Link } from "lucide-react";
import "../../styles/not-found.css";

export default function NotFoundPage() {
  return (
  <>
  <Container className="min-h-screen flex font-['Roboto',_sans-serif] flex-col items-center justify-center bg-[var(--bg)] [perspective:1200px]">
    <h1 className="before:animate-[swing_var(--speed)_infinite_alternate_ease-in-out] text-[clamp(5rem, 40vmin, 20rem)] font-['Open_Sans',_sans-serif] m-0 mb-4 tracking-[1rem] bg-[radial-gradient(var(--lit-header),_var(--header)_45%)_var(--x)_100%/200%_200%] text-transparent after:animate-[swing_var(--speed)_infinite_alternate_ease-in-out] content-['404'] absolute top-[0] left-[0] filter blur-[1.5vmin] [transform:scale(1.05)_translate3d(0,_12%,_-10vmin)_translate(calc((var(--swing-x,_0)_*_0.05)_*_1%),_calc((var(--swing-y)_*_0.05)_*_1%))]">
      404
    </h1>
    <div className="fixed top-[0] left-[0] bottom-[0] right-[0] overflow-hidden">
      <div className="h-[250vmax] w-[250vmax] absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-[swing_var(--speed)_infinite_alternate-reverse_ease-in-out] h-full w-full origin-[50%_30%] rotate-[calc(var(--swing-x] bg-[radial-gradient(40%_40%_at_50%_42%,_transparent,_#000_35%)]" />
      </div>
    </div>
    <div className="text-center leading-normal max-w-[clamp(16rem, 90vmin, 25rem)]">
      <h2 className="text-3xl text-white">We can&apos;t find that page</h2>
      <p className="mb-12">
        We&apos;re fairly sure that page used to be here, but seems to have gone
        missing. We do apologise on it&apos;s behalf.
      </p>
      <Link href="/" target="_blank" rel="noreferrer noopener">
        Home
      </Link>
    </div>
    </Container>
  </>
  );
}

export function getStaticProps() {
  return {
    props: {
      data: "server side props",
    },
  };
}
