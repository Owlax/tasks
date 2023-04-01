import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remaining, setRemaining] = useState<number>(3);
    const [attempts, setAttempts] = useState<string>("3");

    function checkAttempts() {
        if (attempts === "") {
            setAttempts("0");
            return 0;
        }
        if (isNaN(parseInt(attempts))) {
            setAttempts(remaining + "");
            return remaining;
        } else {
            return parseInt(attempts);
        }
    }

    function setting(a: number) {
        setAttempts(remaining + a + "");
        setRemaining(remaining + a);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formMovieReleased" as={Row}>
                <Form.Label column sm={2}>
                    Number of Attemps:
                </Form.Label>
                <Col>
                    <Form.Control
                        value={checkAttempts()}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setAttempts(event.target.value)}
                    />
                </Col>
            </Form.Group>
            <span>
                <Button onClick={() => setting(1)}>Gain</Button>
                <Button onClick={() => setting(-1)}>Use</Button>
            </span>
        </div>
    );
}
