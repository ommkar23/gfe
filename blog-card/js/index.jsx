
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'

const base =
    process.env.NODE_ENV === "production"
        ? "/gfe/blog-card"
        : "/";

createRoot(
    document.getElementById("root")
).render(
    <BrowserRouter basename={base}>
        <App />
    </BrowserRouter>
)
