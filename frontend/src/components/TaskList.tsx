"use client";

import { useState, useRef, useEffect } from "react";
import { MoreVertical, Plus } from "lucide-react";
import { Button } from "@/components/Button";

const TaskList = ({
  tasks = [],
  currentTaskId,
  onSelectTask,
  onEditTask,
  onDeleteTask,
  onAddTask,
}) => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (taskId, e) => {
    e.stopPropagation();
    setOpenMenuId(openMenuId === taskId ? null : taskId);
  };

  if (tasks.length === 0) {
    return (
      <div className="mt-6 text-center py-16 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#0e0e0e] flex items-center justify-center">
            <Plus className="text-white" size={32} />
          </div>
          <p className="mt-4 text-gray-800 text-xl font-medium">No tasks yet</p>
          <p className="text-base mt-2 text-gray-600">
            Add your first task to get started!
          </p>
          <Button
            variant="outline"
            className="mt-6 text-base px-6 py-3 border-2"
            startIcon={<Plus size={20} />}
            onClick={onAddTask}
          >
            Add Your First Task
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className={`p-6 border-2 rounded-xl transition-all duration-200 hover:bg-gray-50 cursor-pointer
            ${
              currentTaskId === task.id
                ? "bg-gray-50 border-[#0e0e0e]"
                : "bg-white border-gray-200"
            }
          `}
          onClick={() => onSelectTask(task)}
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-baseline gap-4 flex-1 min-w-0">
              <span className="text-gray-400 text-lg font-medium">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="text-[#0e0e0e] text-xl font-medium leading-relaxed truncate">
                {task.title}
              </h3>
            </div>
            <div className="relative" ref={menuRef}>
              <Button
                size="icon"
                variant="ghost"
                className="h-10 w-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={(e) => toggleMenu(task.id, e)}
              >
                <MoreVertical size={20} className="text-gray-600" />
              </Button>

              {openMenuId === task.id && (
                <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10">
                  <div className="py-1">
                    <button
                      className="w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditTask(task);
                        setOpenMenuId(null);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="w-full text-left px-4 py-3 text-base text-red-600 hover:bg-gray-50 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteTask(task.id);
                        setOpenMenuId(null);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 ml-10">
            <div className="flex items-center text-base text-gray-600">
              <span className="mr-3">
                {task.pomodoro_duration} minutes focus time
              </span>
              <span className="mx-3">•</span>
              <span>{task.pomodoros_completed} sessions completed</span>
            </div>
          </div>

          <div className="mt-4 ml-10">
            <span
              className={`inline-flex px-4 py-2 rounded-lg text-sm font-medium
                ${
                  task.status === "PENDING"
                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                    : ""
                }
                ${
                  task.status === "RUNNING"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : ""
                }
                ${task.status === "COMPLETED" ? "bg-[#0e0e0e] text-white" : ""}
                ${
                  task.status === "PAUSED"
                    ? "bg-gray-100 text-gray-800 border border-gray-300"
                    : ""
                }
              `}
            >
              {task.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
