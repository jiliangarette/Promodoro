import { FC, ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
