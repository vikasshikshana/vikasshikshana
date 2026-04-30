import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vikas Shikshana Souharda Sahakari Niyamitha. Visit us at our office in Hosapete, Karnataka or call +91-8861016415.",
  alternates: { canonical: "https://vikasshikshana.in/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
