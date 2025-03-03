import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "./components/Spinner";
var Home = lazy(function () { return import("@/pages/Home"); });
var About = lazy(function () { return import("@/pages/About"); });
var Blog = lazy(function () { return import("./pages/Blog"); });
var Dashboard = lazy(function () { return import("./pages/Dashboard"); });
var Test = lazy(function () { return import("./mock/Test"); });
var AppRouter = function () {
    return (_jsx(Suspense, { fallback: _jsx(Spinner, {}), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/test", element: _jsx(Test, {}) })] }) }));
};
export default AppRouter;
