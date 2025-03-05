const FormatTime = ({ seconds, isActive }) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div
      className={`flex items-center timer justify-center gap-4 select-none pt-12 sm:pt-0 sm:gap-8 inset-0 ${
        isActive && "fixed bg-black"
      }`}
    >
      <div
        className="flex relative items-center w-[150px] h-[150px] text-[100px] sm:w-[510px] sm:h-[510px] sm:text-[400px] justify-center bg-[#0e0e0e] text-[#b0b0b0] font-bold transition-all duration-300"
        style={{
          width: isActive ? "40vw" : "",
          height: isActive ? "40vw" : "",
          fontSize: isActive ? "calc(42vw * 0.9)" : "",
          borderRadius: isActive ? "calc(42vw * 0.1)" : "30px",
        }}
      >
        {mins < 10 ? "0" : ""}
        {mins}
      </div>

      <div
        className="flex relative items-center w-[150px] h-[150px] text-[100px] sm:w-[510px] sm:h-[510px] sm:text-[400px] justify-center bg-[#0e0e0e] text-[#b0b0b0] font-bold transition-all duration-300"
        style={{
          width: isActive ? "40vw" : "",
          height: isActive ? "40vw" : "",
          fontSize: isActive ? "calc(42vw * 0.9)" : "",
          borderRadius: isActive ? "calc(42vw * 0.1)" : "30px",
        }}
      >
        {secs < 10 ? "0" : ""}
        {secs}
      </div>
    </div>
  );
};

export default FormatTime;
