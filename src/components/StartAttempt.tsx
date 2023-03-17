import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProg, setProg] = useState<boolean>(false);

    return (
        <span>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                    setProg(!inProg);
                }}
                disabled={inProg || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setProg(!inProg)} disabled={!inProg}>
                Stop Quiz
            </Button>
            <Button onClick={() => setAttempts(attempts + 1)} disabled={inProg}>
                Mulligan
            </Button>
            {attempts}
        </span>
    );
}
