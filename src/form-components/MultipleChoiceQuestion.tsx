//import React, { useState } from "react";
import React from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    return (
        <div>
            <h3>
                Multiple Choice Question {options} {expectedAnswer}
            </h3>
        </div>
    );
}
