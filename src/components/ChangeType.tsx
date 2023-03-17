import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    return (
        <span>
            <Button
                onClick={() =>
                    type === "short_answer_question"
                        ? setType("multiple_choice_question")
                        : setType("short_answer_question")
                }
            >
                Change Type
            </Button>
            {type === "multiple_choice_question"
                ? "   multiple choice"
                : "   short answer"}
        </span>
    );
}
