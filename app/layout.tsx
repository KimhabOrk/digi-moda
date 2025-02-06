import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import { HighlightInit } from "@highlight-run/next/client";
import { ErrorBoundary } from "@/components/error-boundary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <HighlightInit
    	 projectId={'lgx79nzd'}
       serviceName="digi-moda"
    	 tracingOrigins
    	 networkRecording={{
    			enabled: true,
    			recordHeadersAndBody: true,
    			urlBlocklist: [],
    	  }}
     />
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <ErrorBoundary>
        <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
          <Providers>{children}</Providers>
        </body>
      </ErrorBoundary>
    </html>
    </>
  );
}