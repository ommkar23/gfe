
import React from "react"
import { useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.text}>Resource not found</p>
            <button style={styles.button} onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    )
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        textAlign: "center",
    },
    title: {
        fontSize: "64px",
        fontWeight: "700",
        margin: 0,
    },
    text: {
        fontSize: "18px",
        opacity: 0.7,
    },
    button: {
        padding: "8px 16px",
        fontSize: "16px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#2563eb",
        color: "white",
    },
}