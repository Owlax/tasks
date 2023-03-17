import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type holiday = "💘" | "🎇" | "🎃" | "🦃" | "🎄";

    const holidaysByTime: Record<holiday, holiday> = {
        "💘": "🎇",
        "🎇": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "💘"
    };
    const holidaysByAlphabet: Record<holiday, holiday> = {
        "🎄": "🎇",
        "🎇": "🎃",
        "🎃": "🦃",
        "🦃": "💘",
        "💘": "🎄"
    };

    const [day, setDay] = useState<holiday>("💘");
    const [dayA, setDayA] = useState<holiday>("💘");

    function changeDay(): void {
        const newDay = holidaysByTime[day];
        setDay(newDay);
    }
    function changeDayA(): void {
        const newDay = holidaysByAlphabet[dayA];
        setDayA(newDay);
    }

    return (
        <span>
            <Button onClick={() => changeDay()}>Cycle Holiday</Button>
            {day + ""}
            <Button onClick={() => changeDayA()}>CycleHoliday</Button>
            {dayA + ""}
        </span>
    );
}
