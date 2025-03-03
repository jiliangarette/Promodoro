import React, { useState, useEffect } from "react";
import { Edit, Plus, X, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/Button";

interface FormErrors {
  title?: string | null;
  [key: string]: string | null | undefined;
}

const TaskForm = ({ onSubmit, onCancel, initialData, isSubmitting }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [pomodoroDuration, setPomodoroDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (initialData) {
      setTaskTitle(initialData.title || "");
      setPomodoroDuration(initialData.pomodoro_duration || 25);
      setBreakDuration(initialData.break_duration || 5);
    }
  }, [initialData]);

  const validateForm = () => {
    const errors: FormErrors = {};

    if (!taskTitle.trim()) {
      errors.title = "Task title is required";
    } else if (taskTitle.length > 100) {
      errors.title = "Task title must be less than 100 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    onSubmit({
      title: taskTitle,
      pomodoro_duration: pomodoroDuration,
      break_duration: breakDuration,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div
        className="bg-white p-8 rounded-[20px] w-full max-w-md shadow-xl"
        style={{
          animation: "fadeIn 0.3s ease-out",
        }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl text-[#0e0e0e] font-semibold flex items-center">
            {initialData ? (
              <>
                <Edit className="mr-3" size={24} />
                Edit Task
              </>
            ) : (
              <>
                <Plus className="mr-3" size={24} />
                Add New Task
              </>
            )}
          </h2>
          <Button
            size="icon"
            variant="ghost"
            className="h-10 w-10 rounded-xl hover:bg-gray-100"
            onClick={onCancel}
          >
            <X size={20} />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-base font-medium mb-2">
              Task Title
            </label>
            <div className="relative">
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                  if (formErrors.title) {
                    const newErrors = { ...formErrors };
                    delete newErrors.title;
                    setFormErrors(newErrors);
                  }
                }}
                className={`w-full p-4 pl-12 border-2 ${
                  formErrors.title
                    ? "border-red-400 focus:ring-red-200"
                    : "border-gray-200 focus:border-[#0e0e0e] focus:ring-gray-100"
                } rounded-xl bg-white text-gray-800 focus:ring-4 focus:outline-none transition-all duration-200 text-base`}
                placeholder="What are you working on?"
                autoFocus
              />
            </div>
            {formErrors.title && (
              <p className="mt-2 text-base text-red-500 flex items-center">
                <AlertCircle size={16} className="mr-2" />
                {formErrors.title}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-base font-medium mb-2">
                Focus Duration (min)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={pomodoroDuration}
                  onChange={(e) =>
                    setPomodoroDuration(parseInt(e.target.value))
                  }
                  className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl bg-white text-gray-800 focus:border-[#0e0e0e] focus:ring-4 focus:ring-gray-100 focus:outline-none transition-all duration-200 text-base"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-base font-medium mb-2">
                Break Duration (min)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={breakDuration}
                  onChange={(e) => setBreakDuration(parseInt(e.target.value))}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-800 focus:border-[#0e0e0e] focus:ring-4 focus:ring-gray-100 focus:outline-none transition-all duration-200 text-base"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Button
              type="button"
              onClick={onCancel}
              variant="outline"
              className="px-6 py-3 text-base rounded-xl border-2"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="px-6 py-3 text-base rounded-xl"
              disabled={isSubmitting}
              startIcon={
                isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : initialData ? (
                  <Edit size={20} />
                ) : (
                  <Plus size={20} />
                )
              }
            >
              {initialData ? "Update" : "Add"} Task
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
