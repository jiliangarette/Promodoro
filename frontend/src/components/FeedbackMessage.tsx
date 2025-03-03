import React from "react";
import { AlertCircle, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/Button";

const FeedbackMessage = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg z-50 ${
        type === "error" ? "bg-red-500 text-white" : "bg-green-500 text-white"
      }`}
      style={{
        animation: "slideInUp 0.3s ease-out",
      }}
    >
      <div className="flex items-center space-x-2">
        {type === "error" ? (
          <AlertCircle size={18} />
        ) : (
          <CheckCircle2 size={18} />
        )}
        <span>{message}</span>
        <Button
          size="icon"
          variant="ghost"
          className="ml-2 h-6 w-6 rounded-full p-0 hover:bg-opacity-20 hover:bg-black"
          onClick={onClose}
        >
          <X size={14} />
        </Button>
      </div>
    </div>
  );
};

export default FeedbackMessage;
