import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [numA, setNumA] = useState<number>(6);
    const [numB, setNumB] = useState<number>(1);

    function rollA(): void {
        setNumA(d6());
    }
    function rollB(): void {
        setNumB(d6());
    }

    function heckinESLINT(): string {
        return numA === 1 ? "Lose" : "Win";
    }

    return (
        <>
            <span>
                <Button onClick={() => rollA()}>Roll Left</Button>
                <Button onClick={() => rollB()}>Roll Right</Button>
            </span>
            <span data-testid="left-die">{numA}</span>
            <span data-testid="right-die">{numB}</span>
            <span>{numA === numB ? heckinESLINT() : ""}</span>
        </>
    );
}
