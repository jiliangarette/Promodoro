import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
var Navbar = function () {
    var _a = useState(false), isMobileMenuOpen = _a[0], setIsMobileMenuOpen = _a[1];
    return (_jsxs("div", { className: "fixed top-0 w-full ", children: [_jsxs("nav", { className: "transition-all duration-300 ease-in-out bg-white h-16 flex items-center justify-between px-4 ", children: [_jsx(Link, { to: "/", className: "hover:opacity-75 font-display", children: "cool promodoro" }), _jsxs("div", { className: "hidden md:flex md:space-x-6", children: [_jsx(Link, { to: "/about", children: _jsx(Button, { variant: "link", children: "About" }) }), _jsx(Link, { to: "/blog", children: _jsx(Button, { variant: "link", children: "Blog" }) })] }), _jsx("button", { onClick: function () { return setIsMobileMenuOpen(!isMobileMenuOpen); }, className: "p-2 rounded-md cursor-pointer md:hidden ", "aria-label": isMobileMenuOpen ? "Close menu" : "Open menu", children: isMobileMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), isMobileMenuOpen && (_jsxs("div", { className: "fixed inset-0 bg-white   flex flex-col items-center justify-center md:hidden", children: [_jsx(Link, { to: "/about", className: "px-4 py-2 hover:bg-slate-100 w-full text-center", onClick: function () { return setIsMobileMenuOpen(false); }, children: "About" }), _jsx(Link, { to: "/blog", className: "px-4 py-2 hover:bg-slate-100 w-full text-center", onClick: function () { return setIsMobileMenuOpen(false); }, children: "Blog" })] }))] }));
};
export default Navbar;
