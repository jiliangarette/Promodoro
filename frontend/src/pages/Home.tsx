import React, { useState, useEffect } from "react";
import { ListPlus, Loader2 } from "lucide-react";
import { Button } from "@/components/Button";
import TimerButtons from "@/components/TimerButtons";
import FeedbackMessage from "@/components/FeedbackMessage";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";
import FormatTime from "@/components/FormatTime";

const API_BASE_URL = "http://127.0.0.1:8000";

const Home = () => {
  // State declarations
  const [mode, setMode] = useState("pomodoro");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: null, message: "" });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Timer interval effect
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            handleTimerComplete();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Auto-clear feedback messages
  useEffect(() => {
    if (feedback.message) {
      const timer = setTimeout(() => {
        setFeedback({ type: null, message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  useEffect(() => {
    setIsActive(false);
    if (mode === "pomodoro") {
      setTimeLeft(currentTask?.pomodoro_duration * 60 || 25 * 60);
    } else if (mode === "shortBreak") {
      setTimeLeft(currentTask?.break_duration * 60 || 5 * 60);
    } else {
      setTimeLeft(15 * 60);
    }
  }, [currentTask, mode]);

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

  const createTask = async (taskData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/tasks/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      });
      if (response.ok) {
        setIsFormVisible(false);
        await fetchTasks();
        setFeedback({ type: "success", message: "Task created successfully!" });
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

  // API: Update an existing task
  const updateTask = async (taskId, updatedData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
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
        setFeedback({ type: "error", message: "Failed to update task" });
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

  // API: Delete a task
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
        setFeedback({ type: "success", message: "Task deleted successfully" });
      } else {
        setFeedback({ type: "error", message: "Failed to delete task" });
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
    switchMode("pomodoro");
  };

  // Open task in edit mode
  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsFormVisible(true);
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

  const handleFormSubmit = (formData) => {
    if (editingTask) {
      updateTask(editingTask.id, formData);
      setEditingTask(null);
    } else {
      createTask({
        ...formData,
        status: "PENDING",
        pomodoros_completed: 0,
      });
    }
    setIsFormVisible(false);
  };

  const handleFormCancel = () => {
    setIsFormVisible(false);
    setEditingTask(null);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-4">
      {!isActive && (
        <div className="flex gap-4 mb-8 z-50">
          <Button
            className="px-4 py-2 rounded"
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
      )}

      <div className="w-full px-4 font-semibold max-w-[1100px]">
        <h2 className="text-2xl mb-4">
          {mode === "pomodoro"
            ? currentTask
              ? currentTask.title
              : ""
            : mode === "shortBreak"
            ? ""
            : ""}
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
          className="cursor-pointer"
          variant="custom"
          onClick={() => {
            setEditingTask(null);
            setIsFormVisible(true);
          }}
        >
          <ListPlus size={24} />
        </Button>
      </TimerButtons>

      {isFormVisible && (
        <TaskForm
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
          initialData={editingTask}
          isSubmitting={isSubmitting}
        />
      )}

      <div className="mt-8 border-t border-slate-200 pt-6 w-full max-w-[1100px]">
        <h3 className="font-semibold mb-3 text-slate-800  flex items-center">
          <ListPlus size={18} className="mr-2" />
          Your Tasks
        </h3>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="animate-spin text-blue-500" size={28} />
            <p className="mt-2 text-sm text-slate-500 ">
              Loading your tasks...
            </p>
          </div>
        ) : (
          <TaskList
            tasks={tasks}
            currentTaskId={currentTask?.id}
            onSelectTask={selectTask}
            onEditTask={handleEditTask}
            onDeleteTask={deleteTask}
            onAddTask={() => {
              setEditingTask(null);
              setIsFormVisible(true);
            }}
          />
        )}
      </div>

      <FeedbackMessage
        message={feedback.message}
        type={feedback.type}
        onClose={() => setFeedback({ type: null, message: "" })}
      />
    </div>
  );
};

export default Home;
