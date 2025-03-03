import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "Second Hand Marketplace",
  description: "Discover and sell second-hand items at affordable prices.",
  keywords: ["second hand marketplace", "second hand items", "buy and sell"],
  author: "Md Abdul Adud",
  robots: "index, follow",
  ogTitle: "Second Hand Marketplace",
  ogDescription: "Discover and sell second-hand items at affordable prices.",
}

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
