var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Loader2 } from "lucide-react";
var variantStyles = {
    primary: "bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-700",
    custom: "bg-[#0e0e0e] text-[#b0b0b0] hover:opacity-90 focus:ring-slate-900",
    secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-600",
    outline: "border-2 border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-600",
    ghost: "text-slate-700 hover:bg-slate-100 focus:ring-slate-600",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
    link: "text-slate-800 hover:underline p-0 height-auto",
};
var sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
    icon: "p-2",
};
export var Button = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.variant, variant = _c === void 0 ? "primary" : _c, _d = _a.size, size = _d === void 0 ? "md" : _d, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e, startIcon = _a.startIcon, endIcon = _a.endIcon, fullWidth = _a.fullWidth, disabled = _a.disabled, props = __rest(_a, ["children", "className", "variant", "size", "isLoading", "startIcon", "endIcon", "fullWidth", "disabled"]);
    var baseStyles = "inline-flex items-center justify-center cursor-pointer font-medium rounded-[12px] transition-colors duration-200 focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed";
    var buttonStyles = "\n      ".concat(baseStyles, "\n      ").concat(variantStyles[variant], "\n      ").concat(variant !== "link" ? sizeStyles[size] : "", "\n      ").concat(fullWidth ? "w-full" : "", "\n      ").concat(className, "\n    ").trim();
    return (_jsxs("button", __assign({ ref: ref, className: buttonStyles, disabled: disabled || isLoading }, props, { children: [isLoading && _jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }), !isLoading && startIcon && _jsx("span", { className: "mr-2", children: startIcon }), children, !isLoading && endIcon && _jsx("span", { className: "ml-2", children: endIcon })] })));
});
Button.displayName = "Button";
