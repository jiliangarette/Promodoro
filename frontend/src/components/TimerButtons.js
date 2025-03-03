import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "./Button";
var TimerButtons = function (_a) {
    var isActive = _a.isActive, toggleTimer = _a.toggleTimer, resetTimer = _a.resetTimer, children = _a.children;
    return (_jsxs("div", { className: "flex  fixed  left-4 flex-col gap-2 top-1/2 z-20", children: [_jsx(Button, { size: "icon", className: "   cursor-pointer  ", variant: "custom", onClick: toggleTimer, children: isActive ? _jsx(Pause, { size: 25 }) : _jsx(Play, { size: 24 }) }), _jsx(Button, { size: "icon", className: "  cursor-pointer  ", variant: "custom", onClick: resetTimer, children: _jsx(RotateCcw, { size: 24 }) }), children] }));
};
export default TimerButtons;
