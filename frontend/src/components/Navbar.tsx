import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className=" fixed top-0 w-screen">
      <nav
        className={`
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "h-12" : "h-16"}
          flex items-center justify-between px-4 
        `}
      >
        <div></div>

        {!isCollapsed && (
          <div className="flex space-x-6">
            <Link to="/dashboard" className="hover:text-slate-300">
              Dashboard
            </Link>
            <Link to="/about" className="hover:text-slate-300">
              About
            </Link>
            <Link to="/blog" className="hover:text-slate-300">
              Blog
            </Link>
          </div>
        )}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-slate-800 text-slate-100 p-1.5 rounded-full"
          aria-label={isCollapsed ? "Expand navbar" : "Collapse navbar"}
        >
          {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
