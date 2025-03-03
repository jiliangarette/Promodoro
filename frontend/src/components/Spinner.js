import { jsx as _jsx } from "react/jsx-runtime";
export function Spinner(_a) {
    var _b = _a.size, size = _b === void 0 ? "sm" : _b, _c = _a.className, className = _c === void 0 ? "" : _c;
    var sizeClasses = {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-3",
        lg: "h-12 w-12 border-4",
    };
    var classes = "animate-spin rounded-full border-solid border-primary border-t-transparent ".concat(sizeClasses[size], " ").concat(className);
    return (_jsx("div", { className: classes, role: "status", "aria-label": "Loading", children: _jsx("span", { className: "sr-only", children: "Loading" }) }));
}
