import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <div className='projectsContainer'>
            <div className='buttonContainer'>
                <button className='programmingButton'>Programming</button>
                <button className='photographyButton'>Photography</button>
            </div>
            <div className='carouselContainer'>
                <button className='leftArrow'>&lt;</button>
                <div className='carousel'></div>
                <button className='rightArrow'>&gt;</button>
            </div>
        </div>
    )
}

export default Projects