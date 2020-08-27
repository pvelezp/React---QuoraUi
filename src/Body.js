import React from 'react'
import './Body.css'
import Question from './Question';
import Posts from './Posts';

const Body = () => {
    return (
        <div className="body">
            <Question />
            <Posts />
        </div>
    )
}

export default Body
