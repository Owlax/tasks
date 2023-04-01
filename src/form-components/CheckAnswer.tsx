import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function checkAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formAnswer" as={Row}>
                <Form.Label column sm={2}>
                    Check Answer
                </Form.Label>
                <Col>
                    <Form.Control
                        value={answer}
                        onChange={checkAnswer}
                        type="answer"
                        placeholder="Enter answer"
                    />
                </Col>
                <Col>{answer === expectedAnswer ? "✔️" : "❌"}</Col>
            </Form.Group>
        </div>
    );
}
