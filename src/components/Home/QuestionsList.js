import React from 'react'
//import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/_DATA.js'

const QuestionsList = (props) => {

    const { questions, List, users } = props
    return (
        <ul>
            {
                List.map( (k) => {
                    const author = users[questions[k].author]
                    const { timestamp } = questions[k]

                    return(
                        <li key={k}>
                            <div className='question'>
                                <img
                                    src={author.avatarURL}
                                    alt={`Avatar of ${author.name}`}
                                    className='avatar'
                                />
                                <div className='question-info'>
                                    <div>{formatDate(timestamp)}</div>
                                    <ul className='option'>
                                        <li>
                                            <label htmlFor="option-1">{questions[k].optionOne.text}</label>
                                        </li>
                                        <li>
                                            <label htmlFor="option-2">{questions[k].optionTwo.text}</label>
                                        </li>
                                    </ul>                             
                                </div>  
                            </div>                    
                        </li>
                    )
                })
            }
        </ul>
    );
}
 
export default QuestionsList
                