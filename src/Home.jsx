import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const LINKS = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Profile", to: "/profile" },
    { name: "Settings", to: "/settings" },
    { name: "Reports", to: "/reports" },
    { name: "Analytics", to: "/analytics" },
    { name: "Help", to: "/help" },
];

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Navigation</h1>

            <div className="grid">
                {LINKS.map(({ name, to }) => (
                    <Link key={to} to={to} className="grid-item">
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
