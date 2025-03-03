import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "@/components/Navbar";
var RootLayout = function (_a) {
    var children = _a.children;
    return (_jsxs("div", { className: " overflow-x-hidden", children: [_jsx(Navbar, {}), _jsx("main", { children: children })] }));
};
export default RootLayout;
