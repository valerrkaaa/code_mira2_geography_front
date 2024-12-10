import React, { useState, useEffect, useRef } from "react";
// import jwt from 'jsonwebtoken';

const VideoStream = () => {
    const [streamLink, setStreamLink] = useState("");
    const [token, setToken] = useState("");
    const videoRef = useRef(null);

    useEffect(() => {
        const loginToServer = async () => {
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: "user1",
                    password: "1",
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setStreamLink(data.stream_link);
                setToken(data.token);
            } else {
                console.error("Error logging in:", response.status);
            }
        };

        loginToServer();
    }, []);

    useEffect(() => {
        if (streamLink && token) {
            // const ws = new WebSocket(`ws://localhost:8000/stream/${streamLink}`);
            const ws = new WebSocket(`ws://localhost:8000/stream/test`);

            ws.onopen = () => {
                console.log("WebSocket connection opened");
            };

            ws.onmessage = (event) => {
                const videoBlob = new Blob([event.data], { type: "image/jpeg" });
                const videoUrl = URL.createObjectURL(videoBlob);
                videoRef.current.src = videoUrl;
                // videoRef.current.play();

                // const videoBlob = new Blob([event.data], { type: "video/mp4" });
                // const videoUrl = URL.createObjectURL(videoBlob);
                // videoRef.current.srcObject = new MediaStream([new Blob([event.data], { type: "video/mp4" })]);
                // videoRef.current.play();

                // // // const videoBlob = new Blob([event.data], { type: 'video/jpeg' });
                // // videoRef.current.srcObject = new MediaStream([new Blob([event.data], { type: 'video/jpeg' })]);
                // // // const videoUrl = URL.createObjectURL(videoBlob);
                // // // videoRef.current.src = videoUrl;
            };

            ws.onclose = () => {
                console.log("WebSocket connection closed");
            };

            ws.onerror = (error) => {
                console.error("WebSocket error:", error);
            };

            return () => {
                ws.close();
            };
        }
    }, [streamLink, token]);

    return (
        <div>
            <video ref={videoRef} controls autoPlay muted />
        </div>
    );
};

export default VideoStream;
