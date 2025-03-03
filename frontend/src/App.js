import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import AppRouter from "./router";
var App = function () {
    return (_jsx(BrowserRouter, { children: _jsx(RootLayout, { children: _jsx(AppRouter, {}) }) }));
};
export default App;
