import React from "react"

export const App = () => {
    return (
        <div className="app">
            <Card />
        </div>
    )
}

export const Card = () => {
    return (
        <div className="testimonial-card">
            <div className="profile-card">
                <img
                    src='profile-thumbnail.png'
                    alt='profile'
                    className="profile-image"
                />
                <div className="username-card">
                    <p className="name">Sarah Dole</p>
                    <p className="username">@sarahdole</p>
                </div>
            </div>
            <p className="testimonial">
                I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!
            </p>
        </div>
    )
}
