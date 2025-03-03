import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "./Button";

const TimerButtons = ({ isActive, toggleTimer, resetTimer, children }) => {
  return (
    <div className="flex  fixed  left-4 flex-col gap-2 top-1/2 z-20">
      <Button
        size="icon"
        className="   cursor-pointer  "
        variant="custom"
        onClick={toggleTimer}
      >
        {isActive ? <Pause size={25} /> : <Play size={24} />}
      </Button>

      <Button
        size="icon"
        className="  cursor-pointer  "
        variant="custom"
        onClick={resetTimer}
      >
        <RotateCcw size={24} />
      </Button>
      {children}
    </div>
  );
};

export default TimerButtons;
