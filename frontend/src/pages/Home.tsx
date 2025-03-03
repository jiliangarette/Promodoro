import React, { useState, useEffect } from "react";
import {
  ListPlus,
  Edit,
  Trash,
  Loader2,
  Plus,
  X,
  Clock,
  Coffee,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import TimerButtons from "@/components/TimerButtons";
import FormatTime from "@/components/formatTime";

const API_BASE_URL = "http://localhost:8000"; // For local development

interface FormErrors {
  title?: string | null;
  [key: string]: string | null | undefined;
}

const Home = () => {
  const [mode, setMode] = useState("pomodoro");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: null, message: "" });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft <= 1) {
            clearInterval(interval);
            handleTimerComplete();
            return 0;
          }
          return timeLeft - 1;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (feedback.message) {
      const timer = setTimeout(() => {
        setFeedback({ type: null, message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/tasks/`);
      if (response.ok) {
        const data = await response.json();
        setTasks(data);

        if (!currentTask && data.length > 0) {
          setCurrentTask(data[0]);
        }
      } else {
        setFeedback({
          type: "error",
          message: "Failed to load tasks. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setFeedback({
        type: "error",
        message: "Network error. Please check your connection.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const validateTaskForm = () => {
    const errors: FormErrors = {};

    if (!newTaskTitle.trim()) {
      errors.title = "Task title is required";
    } else if (newTaskTitle.length > 100) {
      errors.title = "Task title must be less than 100 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const createTask = async () => {
    if (!validateTaskForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/tasks/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTaskTitle,
          status: "PENDING",
          pomodoro_duration: 25,
          break_duration: 5,
          pomodoros_completed: 0,
        }),
      });

      if (response.ok) {
        setNewTaskTitle("");
        setShowTaskModal(false);
        await fetchTasks();
        setFeedback({
          type: "success",
          message: "Task created successfully!",
        });
      } else {
        setFeedback({
          type: "error",
          message: "Failed to create task. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error creating task:", error);
      setFeedback({
        type: "error",
        message: "Network error. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateTask = async (taskId, updatedData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        await fetchTasks();
        if (updatedData.title) {
          setFeedback({
            type: "success",
            message: "Task updated successfully",
          });
        }
      } else {
        setFeedback({
          type: "error",
          message: "Failed to update task",
        });
      }
    } catch (error) {
      console.error("Error updating task:", error);
      setFeedback({
        type: "error",
        message: "Network error, please try again",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteTask = async (taskId) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchTasks();
        if (currentTask && currentTask.id === taskId) {
          setCurrentTask(null);
        }
        setFeedback({
          type: "success",
          message: "Task deleted successfully",
        });
      } else {
        setFeedback({
          type: "error",
          message: "Failed to delete task",
        });
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      setFeedback({
        type: "error",
        message: "Network error, please try again",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectTask = (task) => {
    setCurrentTask(task);
    resetTimer();
    switchMode("pomodoro");
    setShowTaskModal(false);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setNewTaskTitle(task.title);
    setShowTaskModal(true);
  };

  const handleEditSubmit = () => {
    if (!newTaskTitle.trim()) {
      setFeedback({
        type: "error",
        message: "Task title cannot be empty",
      });
      return;
    }

    if (editingTask) {
      updateTask(editingTask.id, { title: newTaskTitle });
      setShowTaskModal(false);
      setEditingTask(null);
      setNewTaskTitle("");
    }
  };

  const resetTimer = () => {
    setIsActive(false);

    if (mode === "pomodoro") {
      setTimeLeft(currentTask?.pomodoro_duration * 60 || 25 * 60);
    } else if (mode === "shortBreak") {
      setTimeLeft(currentTask?.break_duration * 60 || 5 * 60);
    } else {
      setTimeLeft(15 * 60);
    }
  };

  const switchMode = (newMode) => {
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

  const toggleTimer = () => {
    if (isActive) {
      setIsActive(false);
      if (mode === "pomodoro" && currentTask) {
        updateTask(currentTask.id, { status: "PAUSED" });
      }
    } else {
      setIsActive(true);
      if (mode === "pomodoro" && currentTask) {
        updateTask(currentTask.id, { status: "RUNNING" });
      }
    }
  };

  const handleTimerComplete = () => {
    if (mode === "pomodoro" && currentTask) {
      const updatedPomodoros = (currentTask.pomodoros_completed || 0) + 1;
      updateTask(currentTask.id, {
        pomodoros_completed: updatedPomodoros,
        status: "COMPLETED",
      });
    }

    if (mode === "pomodoro") {
      switchMode("shortBreak");
    } else {
      switchMode("pomodoro");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-4">
      <div className="flex gap-4 mb-8">
        <Button
          className="px-4 py-2 rounded "
          variant={mode === "pomodoro" ? "primary" : "ghost"}
          onClick={() => switchMode("pomodoro")}
        >
          Pomodoro
        </Button>
        <Button
          className="px-4 py-2 rounded"
          variant={mode === "shortBreak" ? "primary" : "ghost"}
          onClick={() => switchMode("shortBreak")}
        >
          Short Break
        </Button>
        <Button
          className="px-4 py-2 rounded"
          variant={mode === "longBreak" ? "primary" : "ghost"}
          onClick={() => switchMode("longBreak")}
        >
          Long Break
        </Button>
      </div>

      <div className="w-full px-4 font-semibold max-w-[1100px] ">
        <h2 className="text-2xl mb-4">
          {mode === "pomodoro"
            ? currentTask
              ? currentTask.title
              : "No task selected"
            : mode === "shortBreak"
            ? "Short Break"
            : "Long Break"}
        </h2>
      </div>

      <FormatTime seconds={timeLeft} isActive={isActive} />
      <TimerButtons
        isActive={isActive}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      >
        <Button
          size="icon"
          className="  cursor-pointer  "
          variant="custom"
          onClick={() => setShowTaskModal(true)}
        >
          <ListPlus size={24} />
        </Button>
      </TimerButtons>

      {showTaskModal && (
        <div className="fixed inset-0 bg-white/50 flex items-center justify-center z-50 animate-fade-in">
          <div
            className="bg-[#0e0e0e] text-[#b0b0b0] p-7 rounded-[20px] w-full max-w-md shadow-xl animate-slide-in"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-black dark:text-white flex items-center">
                {editingTask ? (
                  <>
                    <Edit className="mr-2" size={20} />
                    Edit Task
                  </>
                ) : (
                  <>
                    <Plus className="mr-2" size={20} />
                    Add New Task
                  </>
                )}
              </h2>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full hover:bg-slate-200 dark:hover:bg-[#0e0e0e] transition-colors"
                onClick={() => {
                  setShowTaskModal(false);
                  setEditingTask(null);
                  setNewTaskTitle("");
                  setFormErrors({});
                }}
              >
                <X size={18} />
              </Button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingTask) {
                  handleEditSubmit();
                } else {
                  createTask();
                }
              }}
            >
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Task Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => {
                      setNewTaskTitle(e.target.value);
                      if (formErrors.title) {
                        const newErrors = { ...formErrors };
                        delete newErrors.title;
                        setFormErrors(newErrors);
                      }
                    }}
                    className={`w-full p-3 pl-10 border ${
                      formErrors.title
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white dark:border-bg-[#0e0e0e] focus:ring-blue-500"
                    } rounded-lg bg-white dark:bg-[#0e0e0e] text-bg-[#0e0e0e] dark:text-white focus:ring-2 focus:border-transparent transition-all duration-200`}
                    placeholder="What are you working on?"
                    autoFocus
                  />
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Clock size={18} />
                  </div>
                </div>
                {formErrors.title && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {formErrors.title}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pomodoro Duration (min)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="60"
                      defaultValue="25"
                      className="w-full p-3 pl-10 border border-white dark:border-bg-[#0e0e0e] rounded-lg bg-white dark:bg-[#0e0e0e] text-bg-[#0e0e0e] dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                    <div className="absolute left-3 top-3 text-gray-400">
                      <Clock size={18} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Break Duration (min)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="30"
                      defaultValue="5"
                      className="w-full p-3 pl-10 border border-white dark:border-bg-[#0e0e0e] rounded-lg bg-white dark:bg-[#0e0e0e] text-bg-[#0e0e0e] dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                    <div className="absolute left-3 top-3 text-gray-400">
                      <Coffee size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <Button
                  type="button"
                  onClick={() => {
                    setShowTaskModal(false);
                    setEditingTask(null);
                    setNewTaskTitle("");
                    setFormErrors({});
                  }}
                  variant="outline"
                  className="px-4 transition-all duration-200"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  className="px-4 transition-all duration-200"
                  isLoading={isSubmitting}
                  startIcon={
                    isSubmitting ? (
                      <Loader2 className="animate-spin" size={16} />
                    ) : editingTask ? (
                      <Edit size={16} />
                    ) : (
                      <Plus size={16} />
                    )
                  }
                >
                  {editingTask ? "Update" : "Add"} Task
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="mt-8 border-t border-slate-200 dark:border-bg-[#0e0e0e] pt-6">
        <h3 className="font-semibold mb-3 text-slate-800 dark:text-slate-200 flex items-center">
          <ListPlus size={18} className="mr-2" />
          Your Tasks
        </h3>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="animate-spin text-blue-500" size={28} />
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Loading your tasks...
            </p>
          </div>
        ) : tasks.length > 0 ? (
          <ul className="space-y-3 max-h-64 overflow-y-auto pr-1 custom-scrollbar">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`p-3 border border-slate-200 dark:border-bg-[#0e0e0e] rounded-lg transition-all duration-200 hover:shadow-md ${
                  currentTask && currentTask.id === task.id
                    ? "bg-slate-100 dark:bg-[#0e0e0e] border-blue-300 dark:border-blue-700"
                    : "bg-white dark:bg-bg-[#0e0e0e]"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className="flex-1 cursor-pointer truncate font-medium text-bg-[#0e0e0e] dark:text-white"
                    onClick={() => selectTask(task)}
                  >
                    {task.title}
                  </span>
                  <div className="flex space-x-1 ml-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                      onClick={() => openEditModal(task)}
                    >
                      <Edit size={15} className="text-blue-500" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors duration-200"
                      onClick={() => deleteTask(task.id)}
                    >
                      <Trash size={15} className="text-red-500" />
                    </Button>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {task.pomodoro_duration}m
                    </span>
                    <span className="flex items-center">
                      <Coffee size={12} className="mr-1" />
                      {task.break_duration}m
                    </span>
                    <span className="flex items-center">
                      <CheckCircle2 size={12} className="mr-1" />
                      {task.pomodoros_completed} completed
                    </span>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium
                          ${
                            task.status === "PENDING"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : ""
                          }
                          ${
                            task.status === "RUNNING"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : ""
                          }
                          ${
                            task.status === "COMPLETED"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                              : ""
                          }
                          ${
                            task.status === "PAUSED"
                              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                              : ""
                          }
                        `}
                  >
                    {task.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 text-center py-10 border border-dashed border-white dark:border-bg-[#0e0e0e] rounded-lg bg-slate-50 dark:bg-bg-[#0e0e0e]">
            <div className="flex flex-col items-center">
              <Clock className="text-slate-400" size={40} />
              <p className="mt-2 text-slate-500 dark:text-slate-400 font-medium">
                No tasks yet
              </p>
              <p className="text-sm mt-1 text-slate-400 dark:text-slate-500">
                Add your first task to get started!
              </p>
              <Button
                variant="outline"
                className="mt-4"
                startIcon={<Plus size={16} />}
                onClick={() => {
                  setEditingTask(null);
                  setNewTaskTitle("");
                  setFormErrors({});
                  // Focus the input
                  setTimeout(() => {
                    document.querySelector("input")?.focus();
                  }, 100);
                }}
              >
                Add Your First Task
              </Button>
            </div>
          </div>
        )}
      </div>

      {feedback.message && (
        <div
          className={`fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up ${
            feedback.type === "error"
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          <div className="flex items-center space-x-2">
            {feedback.type === "error" ? (
              <AlertCircle size={18} />
            ) : (
              <CheckCircle2 size={18} />
            )}
            <span>{feedback.message}</span>
            <Button
              size="icon"
              variant="ghost"
              className="ml-2 h-6 w-6 rounded-full p-0 hover:bg-opacity-20 hover:bg-black"
              onClick={() => setFeedback({ type: null, message: "" })}
            >
              <X size={14} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
