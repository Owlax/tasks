import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [reveal, setReveal] = useState<boolean>(false);
    const text = "42";
    return (
        <span>
            <Button onClick={() => setReveal(!reveal)}>Reveal Answer</Button>
            {reveal ? text : ""}
        </span>
    );
}
