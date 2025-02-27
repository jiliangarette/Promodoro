import { FC, ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="fixed h-screen w-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
