
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BlogCard } from './BlogCard'
import NotFound from './NotFound'

export const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route index element={<BlogCard />} />
                <Route path='gfe/blog-card/' element={<BlogCard />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}
