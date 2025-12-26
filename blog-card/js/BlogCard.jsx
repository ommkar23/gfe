import React from "react"
import { useNavigate } from "react-router-dom"

export const BlogCard = () => {

    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='cover-image'
                src='cover-image.jpg'
                alt='Cover Image for the Blog'
            />
            <div className='card-content'>
                <div className='card-title-section'>
                    <div className='card-tag-container'>
                        <p className='card-tag'>Interior</p>
                    </div>
                    <p className='card-title'>Top 5 Living Room Inspirations</p>
                </div>
                <div className='card-description-section'>
                    <p className='card-description'>Curated vibrants colors for your living, make it pop & calm in the same time.</p>
                    <button
                        className='card-cta'
                        onClick={() => navigate('/show-item')}
                    >
                        <p className='card-cta-text'>Read more</p>
                        <img
                            className='card-cta-image'
                            src='arrow-right-line.png'
                            alt='right arrow button'
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
