import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const toggleColor = () => {
        if (color === "red") setColor("green");
        else if (color === "green") setColor("yellow");
        else setColor("red");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <div
                style={{
                    width: "120px",
                    background: "black",
                    padding: "20px",
                    borderRadius: "20px",
                    margin: "0 auto"
                }}
            >
                <div
                    onClick={() => setColor("red")}
                    className={`light red ${color === "red" ? "glow" : ""}`}
                ></div>

                <div
                    onClick={() => setColor("yellow")}
                    className={`light yellow ${color === "yellow" ? "glow" : ""}`}
                ></div>

                <div
                    onClick={() => setColor("green")}
                    className={`light green ${color === "green" ? "glow" : ""}`}
                ></div>
            </div>

            <button
                onClick={toggleColor}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "18px",
                    cursor: "pointer"
                }}
            >
                Cambiar color
            </button>

            <style>{`
                .light {
                    width: 70px;
                    height: 70px;
                    margin: 10px auto;
                    border-radius: 50%;
                    opacity: 0.3;
                    transition: 0.3s;
                    cursor: pointer;
                }
                .red { background: red; }
                .yellow { background: yellow; }
                .green { background: green; }

                .glow {
                    opacity: 1;
                    box-shadow: 0 0 20px 10px white;
                }
            `}</style>
        </div>
    );
};

export default TrafficLight;
