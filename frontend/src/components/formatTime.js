import { jsxs as _jsxs } from "react/jsx-runtime";
var FormatTime = function (_a) {
    var seconds = _a.seconds, isActive = _a.isActive;
    var mins = Math.floor(seconds / 60);
    var secs = seconds % 60;
    return (_jsxs("div", { className: "flex items-center timer justify-center gap-4 select-none sm:gap-8 inset-0 ".concat(isActive && "fixed bg-black"), children: [_jsxs("div", { className: "flex relative items-center w-[150px] h-[150px] text-[100px] sm:w-[510px] sm:h-[510px] sm:text-[400px] justify-center bg-[#0e0e0e] text-[#b0b0b0] font-bold transition-all duration-300", style: {
                    width: isActive ? "40vw" : "",
                    height: isActive ? "40vw" : "",
                    fontSize: isActive ? "calc(42vw * 0.9)" : "",
                    borderRadius: isActive ? "calc(42vw * 0.1)" : "30px",
                }, children: [mins < 10 ? "0" : "", mins] }), _jsxs("div", { className: "flex relative items-center w-[150px] h-[150px] text-[100px] sm:w-[510px] sm:h-[510px] sm:text-[400px] justify-center bg-[#0e0e0e] text-[#b0b0b0] font-bold transition-all duration-300", style: {
                    width: isActive ? "40vw" : "",
                    height: isActive ? "40vw" : "",
                    fontSize: isActive ? "calc(42vw * 0.9)" : "",
                    borderRadius: isActive ? "calc(42vw * 0.1)" : "30px",
                }, children: [secs < 10 ? "0" : "", secs] })] }));
};
export default FormatTime;
