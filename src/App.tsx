import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Welcome!</h1>
            <p style={{ border: "4px solid green", padding: "4px" }}>
                Alexandra Croce &quot;Hello World&quot;
            </p>
            <img
                src={require("./download.jpg")}
                alt="A picture of a sleepy frog"
            />
            <ol>
                <li>Do you like frogs</li>
                <li>You do?</li>
                <li>Come join frogs</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p></p>
            <p></p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "70px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "60px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p></p>
            <p></p>
        </div>
    );
}

export default App;
