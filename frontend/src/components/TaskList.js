"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { MoreVertical, Plus } from "lucide-react";
import { Button } from "@/components/Button";
var TaskList = function (_a) {
    var _b = _a.tasks, tasks = _b === void 0 ? [] : _b, currentTaskId = _a.currentTaskId, onSelectTask = _a.onSelectTask, onEditTask = _a.onEditTask, onDeleteTask = _a.onDeleteTask, onAddTask = _a.onAddTask;
    var _c = useState(null), openMenuId = _c[0], setOpenMenuId = _c[1];
    var menuRef = useRef(null);
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenuId(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    var toggleMenu = function (taskId, e) {
        e.stopPropagation();
        setOpenMenuId(openMenuId === taskId ? null : taskId);
    };
    if (tasks.length === 0) {
        return (_jsx("div", { className: "mt-6 text-center py-16 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50", children: _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-[#0e0e0e] flex items-center justify-center", children: _jsx(Plus, { className: "text-white", size: 32 }) }), _jsx("p", { className: "mt-4 text-gray-800 text-xl font-medium", children: "No tasks yet" }), _jsx("p", { className: "text-base mt-2 text-gray-600", children: "Add your first task to get started!" }), _jsx(Button, { variant: "outline", className: "mt-6 text-base px-6 py-3 border-2", startIcon: _jsx(Plus, { size: 20 }), onClick: onAddTask, children: "Add Your First Task" })] }) }));
    }
    return (_jsx("div", { className: "space-y-4", children: tasks.map(function (task, index) { return (_jsxs("div", { className: "p-6 border-2 rounded-xl transition-all duration-200 hover:bg-gray-50 cursor-pointer\n            ".concat(currentTaskId === task.id
                ? "bg-gray-50 border-[#0e0e0e]"
                : "bg-white border-gray-200", "\n          "), onClick: function () { return onSelectTask(task); }, children: [_jsxs("div", { className: "flex justify-between items-start gap-4", children: [_jsxs("div", { className: "flex items-baseline gap-4 flex-1 min-w-0", children: [_jsx("span", { className: "text-gray-400 text-lg font-medium", children: (index + 1).toString().padStart(2, "0") }), _jsx("h3", { className: "text-[#0e0e0e] text-xl font-medium leading-relaxed truncate", children: task.title })] }), _jsxs("div", { className: "relative", ref: menuRef, children: [_jsx(Button, { size: "icon", variant: "ghost", className: "h-10 w-10 rounded-lg hover:bg-gray-100 transition-colors duration-200", onClick: function (e) { return toggleMenu(task.id, e); }, children: _jsx(MoreVertical, { size: 20, className: "text-gray-600" }) }), openMenuId === task.id && (_jsx("div", { className: "absolute right-0 mt-2 w-48 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10", children: _jsxs("div", { className: "py-1", children: [_jsx("button", { className: "w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-gray-50 transition-colors duration-200", onClick: function (e) {
                                                    e.stopPropagation();
                                                    onEditTask(task);
                                                    setOpenMenuId(null);
                                                }, children: "Edit" }), _jsx("button", { className: "w-full text-left px-4 py-3 text-base text-red-600 hover:bg-gray-50 transition-colors duration-200", onClick: function (e) {
                                                    e.stopPropagation();
                                                    onDeleteTask(task.id);
                                                    setOpenMenuId(null);
                                                }, children: "Delete" })] }) }))] })] }), _jsx("div", { className: "mt-4 ml-10", children: _jsxs("div", { className: "flex items-center text-base text-gray-600", children: [_jsxs("span", { className: "mr-3", children: [task.pomodoro_duration, " minutes focus time"] }), _jsx("span", { className: "mx-3", children: "\u2022" }), _jsxs("span", { children: [task.pomodoros_completed, " sessions completed"] })] }) }), _jsx("div", { className: "mt-4 ml-10", children: _jsx("span", { className: "inline-flex px-4 py-2 rounded-lg text-sm font-medium\n                ".concat(task.status === "PENDING"
                            ? "bg-amber-50 text-amber-800 border border-amber-200"
                            : "", "\n                ").concat(task.status === "RUNNING"
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            : "", "\n                ").concat(task.status === "COMPLETED" ? "bg-[#0e0e0e] text-white" : "", "\n                ").concat(task.status === "PAUSED"
                            ? "bg-gray-100 text-gray-800 border border-gray-300"
                            : "", "\n              "), children: task.status }) })] }, task.id)); }) }));
};
export default TaskList;
