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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Edit, Plus, X, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/Button";
var TaskForm = function (_a) {
    var onSubmit = _a.onSubmit, onCancel = _a.onCancel, initialData = _a.initialData, isSubmitting = _a.isSubmitting;
    var _b = useState(""), taskTitle = _b[0], setTaskTitle = _b[1];
    var _c = useState(25), pomodoroDuration = _c[0], setPomodoroDuration = _c[1];
    var _d = useState(5), breakDuration = _d[0], setBreakDuration = _d[1];
    var _e = useState({}), formErrors = _e[0], setFormErrors = _e[1];
    useEffect(function () {
        if (initialData) {
            setTaskTitle(initialData.title || "");
            setPomodoroDuration(initialData.pomodoro_duration || 25);
            setBreakDuration(initialData.break_duration || 5);
        }
    }, [initialData]);
    var validateForm = function () {
        var errors = {};
        if (!taskTitle.trim()) {
            errors.title = "Task title is required";
        }
        else if (taskTitle.length > 100) {
            errors.title = "Task title must be less than 100 characters";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        if (!validateForm())
            return;
        onSubmit({
            title: taskTitle,
            pomodoro_duration: pomodoroDuration,
            break_duration: breakDuration,
        });
    };
    return (_jsx("div", { className: "fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4 backdrop-blur-sm", children: _jsxs("div", { className: "bg-white p-8 rounded-[20px] w-full max-w-md shadow-xl", style: {
                animation: "fadeIn 0.3s ease-out",
            }, children: [_jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsx("h2", { className: "text-2xl text-[#0e0e0e] font-semibold flex items-center", children: initialData ? (_jsxs(_Fragment, { children: [_jsx(Edit, { className: "mr-3", size: 24 }), "Edit Task"] })) : (_jsxs(_Fragment, { children: [_jsx(Plus, { className: "mr-3", size: 24 }), "Add New Task"] })) }), _jsx(Button, { size: "icon", variant: "ghost", className: "h-10 w-10 rounded-xl hover:bg-gray-100", onClick: onCancel, children: _jsx(X, { size: 20 }) })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 text-base font-medium mb-2", children: "Task Title" }), _jsx("div", { className: "relative", children: _jsx("input", { type: "text", value: taskTitle, onChange: function (e) {
                                            setTaskTitle(e.target.value);
                                            if (formErrors.title) {
                                                var newErrors = __assign({}, formErrors);
                                                delete newErrors.title;
                                                setFormErrors(newErrors);
                                            }
                                        }, className: "w-full p-4 pl-12 border-2 ".concat(formErrors.title
                                            ? "border-red-400 focus:ring-red-200"
                                            : "border-gray-200 focus:border-[#0e0e0e] focus:ring-gray-100", " rounded-xl bg-white text-gray-800 focus:ring-4 focus:outline-none transition-all duration-200 text-base"), placeholder: "What are you working on?", autoFocus: true }) }), formErrors.title && (_jsxs("p", { className: "mt-2 text-base text-red-500 flex items-center", children: [_jsx(AlertCircle, { size: 16, className: "mr-2" }), formErrors.title] }))] }), _jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 text-base font-medium mb-2", children: "Focus Duration (min)" }), _jsx("div", { className: "relative", children: _jsx("input", { type: "number", min: "1", max: "60", value: pomodoroDuration, onChange: function (e) {
                                                    return setPomodoroDuration(parseInt(e.target.value));
                                                }, className: "w-full p-4 pl-12 border-2 border-gray-200 rounded-xl bg-white text-gray-800 focus:border-[#0e0e0e] focus:ring-4 focus:ring-gray-100 focus:outline-none transition-all duration-200 text-base" }) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-gray-700 text-base font-medium mb-2", children: "Break Duration (min)" }), _jsx("div", { className: "relative", children: _jsx("input", { type: "number", min: "1", max: "30", value: breakDuration, onChange: function (e) { return setBreakDuration(parseInt(e.target.value)); }, className: "w-full p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-800 focus:border-[#0e0e0e] focus:ring-4 focus:ring-gray-100 focus:outline-none transition-all duration-200 text-base" }) })] })] }), _jsxs("div", { className: "flex justify-end space-x-4 pt-4", children: [_jsx(Button, { type: "button", onClick: onCancel, variant: "outline", className: "px-6 py-3 text-base rounded-xl border-2", children: "Cancel" }), _jsxs(Button, { type: "submit", className: "px-6 py-3 text-base rounded-xl", disabled: isSubmitting, startIcon: isSubmitting ? (_jsx(Loader2, { className: "animate-spin", size: 20 })) : initialData ? (_jsx(Edit, { size: 20 })) : (_jsx(Plus, { size: 20 })), children: [initialData ? "Update" : "Add", " Task"] })] })] })] }) }));
};
export default TaskForm;
