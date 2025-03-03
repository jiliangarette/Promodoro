import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertCircle, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/Button";
var FeedbackMessage = function (_a) {
    var message = _a.message, type = _a.type, onClose = _a.onClose;
    if (!message)
        return null;
    return (_jsx("div", { className: "fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg z-50 ".concat(type === "error" ? "bg-red-500 text-white" : "bg-green-500 text-white"), style: {
            animation: "slideInUp 0.3s ease-out",
        }, children: _jsxs("div", { className: "flex items-center space-x-2", children: [type === "error" ? (_jsx(AlertCircle, { size: 18 })) : (_jsx(CheckCircle2, { size: 18 })), _jsx("span", { children: message }), _jsx(Button, { size: "icon", variant: "ghost", className: "ml-2 h-6 w-6 rounded-full p-0 hover:bg-opacity-20 hover:bg-black", onClick: onClose, children: _jsx(X, { size: 14 }) })] }) }));
};
export default FeedbackMessage;
