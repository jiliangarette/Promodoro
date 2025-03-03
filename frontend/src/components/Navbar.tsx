import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full ">
      {" "}
      {/* Ensure navbar is above everything */}
      <nav className="transition-all duration-300 ease-in-out bg-white h-16 flex items-center justify-between px-4 ">
        <Link to="/" className="hover:opacity-75 font-display">
          cool promodoro
        </Link>

        <div className="hidden md:flex md:space-x-6">
          <Link to="/dashboard">
            <Button variant="link">Dashboard</Button>
          </Link>
          <Link to="/blog">
            <Button variant="link">Blog</Button>
          </Link>
          <Link to="/about">
            <Button variant="link">About</Button>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md cursor-pointer md:hidden "
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white   flex flex-col items-center justify-center md:hidden">
          <Link
            to="/dashboard"
            className="px-4 py-2 hover:bg-slate-100 w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 hover:bg-slate-100 w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/blog"
            className="px-4 py-2 hover:bg-slate-100 w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
