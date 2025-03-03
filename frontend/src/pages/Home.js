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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ListPlus, Loader2 } from "lucide-react";
import { Button } from "@/components/Button";
import TimerButtons from "@/components/TimerButtons";
import FeedbackMessage from "@/components/FeedbackMessage";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
import FormatTime from "@/components/FormatTime";
var API_BASE_URL = "http://13.54.72.51:8000";
var Home = function () {
    // State declarations
    var _a = useState("pomodoro"), mode = _a[0], setMode = _a[1];
    var _b = useState(25 * 60), timeLeft = _b[0], setTimeLeft = _b[1];
    var _c = useState(false), isActive = _c[0], setIsActive = _c[1];
    var _d = useState([]), tasks = _d[0], setTasks = _d[1];
    var _e = useState(null), currentTask = _e[0], setCurrentTask = _e[1];
    var _f = useState(false), isLoading = _f[0], setIsLoading = _f[1];
    var _g = useState(false), isSubmitting = _g[0], setIsSubmitting = _g[1];
    var _h = useState({ type: null, message: "" }), feedback = _h[0], setFeedback = _h[1];
    var _j = useState(false), isFormVisible = _j[0], setIsFormVisible = _j[1];
    var _k = useState(null), editingTask = _k[0], setEditingTask = _k[1];
    // Timer interval effect
    useEffect(function () {
        var interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(function () {
                setTimeLeft(function (prevTime) {
                    if (prevTime <= 1) {
                        clearInterval(interval);
                        handleTimerComplete();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        else if (timeLeft === 0) {
            setIsActive(false);
        }
        return function () { return clearInterval(interval); };
    }, [isActive, timeLeft]);
    // Fetch tasks on mount
    useEffect(function () {
        fetchTasks();
    }, []);
    // Auto-clear feedback messages
    useEffect(function () {
        if (feedback.message) {
            var timer_1 = setTimeout(function () {
                setFeedback({ type: null, message: "" });
            }, 3000);
            return function () { return clearTimeout(timer_1); };
        }
    }, [feedback]);
    useEffect(function () {
        setIsActive(false);
        if (mode === "pomodoro") {
            setTimeLeft((currentTask === null || currentTask === void 0 ? void 0 : currentTask.pomodoro_duration) * 60 || 25 * 60);
        }
        else if (mode === "shortBreak") {
            setTimeLeft((currentTask === null || currentTask === void 0 ? void 0 : currentTask.break_duration) * 60 || 5 * 60);
        }
        else {
            setTimeLeft(15 * 60);
        }
    }, [currentTask, mode]);
    var fetchTasks = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    return [4 /*yield*/, fetch("".concat(API_BASE_URL, "/api/tasks/"))];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    setTasks(data);
                    if (!currentTask && data.length > 0) {
                        setCurrentTask(data[0]);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    setFeedback({
                        type: "error",
                        message: "Failed to load tasks. Please try again.",
                    });
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    error_1 = _a.sent();
                    console.error("Error fetching tasks:", error_1);
                    setFeedback({
                        type: "error",
                        message: "Network error. Please check your connection.",
                    });
                    return [3 /*break*/, 8];
                case 7:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var createTask = function (taskData) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    return [4 /*yield*/, fetch("".concat(API_BASE_URL, "/api/tasks/"), {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(taskData),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    setIsFormVisible(false);
                    return [4 /*yield*/, fetchTasks()];
                case 3:
                    _a.sent();
                    setFeedback({ type: "success", message: "Task created successfully!" });
                    return [3 /*break*/, 5];
                case 4:
                    setFeedback({
                        type: "error",
                        message: "Failed to create task. Please try again.",
                    });
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    error_2 = _a.sent();
                    console.error("Error creating task:", error_2);
                    setFeedback({
                        type: "error",
                        message: "Network error. Please check your connection.",
                    });
                    return [3 /*break*/, 8];
                case 7:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    // API: Update an existing task
    var updateTask = function (taskId, updatedData) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    return [4 /*yield*/, fetch("".concat(API_BASE_URL, "/api/tasks/").concat(taskId, "/"), {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(updatedData),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, fetchTasks()];
                case 3:
                    _a.sent();
                    if (updatedData.title) {
                        setFeedback({
                            type: "success",
                            message: "Task updated successfully",
                        });
                    }
                    return [3 /*break*/, 5];
                case 4:
                    setFeedback({ type: "error", message: "Failed to update task" });
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    error_3 = _a.sent();
                    console.error("Error updating task:", error_3);
                    setFeedback({
                        type: "error",
                        message: "Network error, please try again",
                    });
                    return [3 /*break*/, 8];
                case 7:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    // API: Delete a task
    var deleteTask = function (taskId) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    return [4 /*yield*/, fetch("".concat(API_BASE_URL, "/api/tasks/").concat(taskId, "/"), {
                            method: "DELETE",
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, fetchTasks()];
                case 3:
                    _a.sent();
                    if (currentTask && currentTask.id === taskId) {
                        setCurrentTask(null);
                    }
                    setFeedback({ type: "success", message: "Task deleted successfully" });
                    return [3 /*break*/, 5];
                case 4:
                    setFeedback({ type: "error", message: "Failed to delete task" });
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    error_4 = _a.sent();
                    console.error("Error deleting task:", error_4);
                    setFeedback({
                        type: "error",
                        message: "Network error, please try again",
                    });
                    return [3 /*break*/, 8];
                case 7:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var selectTask = function (task) {
        setCurrentTask(task);
        switchMode("pomodoro");
    };
    // Open task in edit mode
    var handleEditTask = function (task) {
        setEditingTask(task);
        setIsFormVisible(true);
    };
    var resetTimer = function () {
        setIsActive(false);
        if (mode === "pomodoro") {
            setTimeLeft((currentTask === null || currentTask === void 0 ? void 0 : currentTask.pomodoro_duration) * 60 || 25 * 60);
        }
        else if (mode === "shortBreak") {
            setTimeLeft((currentTask === null || currentTask === void 0 ? void 0 : currentTask.break_duration) * 60 || 5 * 60);
        }
        else {
            setTimeLeft(15 * 60);
        }
    };
    var switchMode = function (newMode) {
        setMode(newMode);
        setIsActive(false);
        switch (newMode) {
            case "pomodoro":
                setTimeLeft(25 * 60);
                break;
            case "shortBreak":
                setTimeLeft(5 * 60);
                break;
            case "longBreak":
                setTimeLeft(15 * 60);
                break;
            default:
                setTimeLeft(25 * 60);
        }
    };
    var toggleTimer = function () {
        if (isActive) {
            setIsActive(false);
            if (mode === "pomodoro" && currentTask) {
                updateTask(currentTask.id, { status: "PAUSED" });
            }
        }
        else {
            setIsActive(true);
            if (mode === "pomodoro" && currentTask) {
                updateTask(currentTask.id, { status: "RUNNING" });
            }
        }
    };
    var handleTimerComplete = function () {
        if (mode === "pomodoro" && currentTask) {
            var updatedPomodoros = (currentTask.pomodoros_completed || 0) + 1;
            updateTask(currentTask.id, {
                pomodoros_completed: updatedPomodoros,
                status: "COMPLETED",
            });
        }
        if (mode === "pomodoro") {
            switchMode("shortBreak");
        }
        else {
            switchMode("pomodoro");
        }
    };
    var handleFormSubmit = function (formData) {
        if (editingTask) {
            updateTask(editingTask.id, formData);
            setEditingTask(null);
        }
        else {
            createTask(__assign(__assign({}, formData), { status: "PENDING", pomodoros_completed: 0 }));
        }
        setIsFormVisible(false);
    };
    var handleFormCancel = function () {
        setIsFormVisible(false);
        setEditingTask(null);
    };
    return (_jsxs("div", { className: "flex min-h-screen flex-col items-center justify-start p-4", children: [_jsxs("div", { className: "flex gap-4 mb-8", children: [_jsx(Button, { className: "px-4 py-2 rounded", variant: mode === "pomodoro" ? "primary" : "ghost", onClick: function () { return switchMode("pomodoro"); }, children: "Pomodoro" }), _jsx(Button, { className: "px-4 py-2 rounded", variant: mode === "shortBreak" ? "primary" : "ghost", onClick: function () { return switchMode("shortBreak"); }, children: "Short Break" }), _jsx(Button, { className: "px-4 py-2 rounded", variant: mode === "longBreak" ? "primary" : "ghost", onClick: function () { return switchMode("longBreak"); }, children: "Long Break" })] }), _jsx("div", { className: "w-full px-4 font-semibold max-w-[1100px]", children: _jsx("h2", { className: "text-2xl mb-4", children: mode === "pomodoro"
                        ? currentTask
                            ? currentTask.title
                            : ""
                        : mode === "shortBreak"
                            ? "Short Break"
                            : "Long Break" }) }), _jsx(FormatTime, { seconds: timeLeft, isActive: isActive }), _jsx(TimerButtons, { isActive: isActive, toggleTimer: toggleTimer, resetTimer: resetTimer, children: _jsx(Button, { size: "icon", className: "cursor-pointer", variant: "custom", onClick: function () {
                        setEditingTask(null);
                        setIsFormVisible(true);
                    }, children: _jsx(ListPlus, { size: 24 }) }) }), isFormVisible && (_jsx(TaskForm, { onSubmit: handleFormSubmit, onCancel: handleFormCancel, initialData: editingTask, isSubmitting: isSubmitting })), _jsxs("div", { className: "mt-8 border-t border-slate-200 pt-6 w-full max-w-[1100px]", children: [_jsxs("h3", { className: "font-semibold mb-3 text-slate-800  flex items-center", children: [_jsx(ListPlus, { size: 18, className: "mr-2" }), "Your Tasks"] }), isLoading ? (_jsxs("div", { className: "flex flex-col items-center justify-center py-8", children: [_jsx(Loader2, { className: "animate-spin text-blue-500", size: 28 }), _jsx("p", { className: "mt-2 text-sm text-slate-500 ", children: "Loading your tasks..." })] })) : (_jsx(TaskList, { tasks: tasks, currentTaskId: currentTask === null || currentTask === void 0 ? void 0 : currentTask.id, onSelectTask: selectTask, onEditTask: handleEditTask, onDeleteTask: deleteTask, onAddTask: function () {
                            setEditingTask(null);
                            setIsFormVisible(true);
                        } }))] }), _jsx(FeedbackMessage, { message: feedback.message, type: feedback.type, onClose: function () { return setFeedback({ type: null, message: "" }); } })] }));
};
export default Home;
