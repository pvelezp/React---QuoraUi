import React from 'react'
import { Avatar } from '@material-ui/core'
import './Question.css'

const Question = () => {
    return (
        <div className="question">
            <div className="question__header">
            <Avatar className="question__avatar" />
            <h4>Pablo Vélez</h4>
            </div>

                <h3>What is your question or link?</h3>

        </div>
    )
}

export default Question
