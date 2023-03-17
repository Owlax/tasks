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

    function changeDay(): void {
        const newDay = holidaysByTime[day];
        setDay(newDay);
    }
    function changeDayA(): void {
        const newDay = holidaysByAlphabet[day];
        setDay(newDay);
    }

    return (
        <span>
            <Button onClick={() => changeDayA()}>Advance by Alphabet</Button>
            <Button onClick={() => changeDay()}>Advance by Year</Button>
            {"Holiday: " + day}
        </span>
    );
}
