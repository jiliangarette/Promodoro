import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
var TickDOM = Tick.DOM;
var Timer2 = function () {
    var _a = useState(25 * 60), timeLeft = _a[0], setTimeLeft = _a[1];
    var _b = useState(false), isActive = _b[0], setIsActive = _b[1];
    var _c = useState(false), isBreak = _c[0], setIsBreak = _c[1];
    var minutesRef = useRef(null);
    var secondsRef = useRef(null);
    var minutesInstance = useRef(null);
    var secondsInstance = useRef(null);
    var timerRef = useRef(null);
    var getMinutes = function (seconds) {
        return Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0");
    };
    var getSeconds = function (seconds) {
        return (seconds % 60).toString().padStart(2, "0");
    };
    useEffect(function () {
        if (minutesRef.current && secondsRef.current) {
            minutesInstance.current = TickDOM.create(minutesRef.current, {
                value: getMinutes(timeLeft),
            });
            secondsInstance.current = TickDOM.create(secondsRef.current, {
                value: getSeconds(timeLeft),
            });
        }
        return function () {
            if (minutesRef.current)
                TickDOM.destroy(minutesRef.current);
            if (secondsRef.current)
                TickDOM.destroy(secondsRef.current);
        };
    }, []);
    useEffect(function () {
        if (minutesInstance.current) {
            minutesInstance.current.value = getMinutes(timeLeft);
        }
        if (secondsInstance.current) {
            secondsInstance.current.value = getSeconds(timeLeft);
        }
        if (timeLeft === 0) {
            setIsActive(false);
            if (isBreak) {
                setTimeLeft(25 * 60);
                setIsBreak(false);
            }
            else {
                setTimeLeft(5 * 60);
                setIsBreak(true);
            }
        }
    }, [timeLeft, isBreak]);
    useEffect(function () {
        if (isActive && timeLeft > 0) {
            timerRef.current = setInterval(function () {
                setTimeLeft(function (time) { return time - 1; });
            }, 1000);
        }
        else if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        return function () {
            if (timerRef.current)
                clearInterval(timerRef.current);
        };
    }, [isActive, timeLeft]);
    var handleStart = function () { return setIsActive(true); };
    var handlePause = function () { return setIsActive(false); };
    var handleReset = function () {
        setIsActive(false);
        setIsBreak(false);
        setTimeLeft(25 * 60);
    };
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center gap-8", children: [_jsx("div", { className: "text-2xl", children: "Dynamic Title" }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { ref: minutesRef, className: "tick", children: _jsx("div", { "data-repeat": "true", "aria-hidden": "true", children: _jsx("span", { "data-view": "flip" }) }) }), _jsx("div", { className: "text-[15vw] mx-4 text-gray-800", children: ":" }), _jsx("div", { ref: secondsRef, className: "tick", children: _jsx("div", { "data-repeat": "true", "aria-hidden": "true", children: _jsx("span", { "data-view": "flip" }) }) })] }), _jsxs("div", { className: "flex gap-4", children: [!isActive ? (_jsx("button", { onClick: handleStart, className: "px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600", children: "Start" })) : (_jsx("button", { onClick: handlePause, className: "px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600", children: "Pause" })), _jsx("button", { onClick: handleReset, className: "px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600", children: "Reset" })] })] }));
};
export default Timer2;
