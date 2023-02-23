import React from 'react'
import { useParams,Link } from 'react-router-dom'
import upVotes from '../../assets/upVotes.png'
import downVotes from '../../assets/downVotes.png'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'

const QuestionDetails = () => {
  const {id} = useParams()
  var questionList =[{
    _id:'1',
    upVotes:3,
    downVotes:2,
    noOfAnswers:2,
    questionTitle:"What is a function?",
    questionBody:"It meant to be",
    questionTags:["java","node.js","react.js","mongodb"],
    userPosted:"sai",
    userId:3,
    askedOn:"jan 1",
    answer:[{
            answerBody:"Answer",
             userAnswered:'kumar',
            answeredOn:"jan 23",
            userId:2,
    }]
},
  {
    _id:'2',
    upVotes:0,
    downVotes:3,
    noOfAnswers:0,
    questionTitle:"What is a function?",
    questionBody:"It meant to be",
    questionTags:["javascript","R","python"],
    userPosted:"sai",
    userId:1,
    askedOn:"jan 1",
    answer:[{
              answerBody:"Answer",
              userAnswered:'kumar',
              answeredOn:"jan 29",
              userId:2,
    }]
},
  {
    _id:'3',
    upVotes:1,
    downVotes:2,
    noOfAnswers:0,
    questionTitle:"What is a function?",
    questionBody:"It meant to be",
    questionTags:["javascript","R","Python"],
    userPosted:"sai",
    askedOn:"jan 1",
    userId:2,
    answer:[{
              answerBody:"Answer",
              userAnswered:'kumar',
              answeredOn:"jan 2",
              userId:2,
    }] 
}]
  return (
    <div className='question-details-page'>
      {
        questionList === null ?
        <h1>Loading...</h1> :
        <>
            {
                questionList.filter(question => question._id === id).map(question => (
                  <div key={question._id}>
                    {console.log(question)}
                    <section className='question-details-container'>
                      <h1>{question.questionTitle}</h1>
                      <div className='question-details-container-2'>
                        <div className='question-votes'>
                          <img src={upVotes} alt='upVotes' width='18'  className='votes-icon'/>
                          <p>{question.upVotes - question.downVotes}</p>
                          <img src={downVotes} alt='downVotes' width='18' className='votes-icon' />
                        </div>
                      </div>
                      <div style={{width:"100%"}}>
                        <p className='question-body'>{question.questionBody}</p>
                        <div className='question-details-tags'>
                          {
                            question.questionTags.map((tag)=>(
                              <p key={tag}>{tag}</p>
                            ))
                          }
                        </div>
                        <div className='question-actions-user'>
                          <div>
                            <button type='button'>Share</button>
                            <button type='button'>Delete</button>
                          </div>
                          <div>
                            <p>asked {question.askedOn}</p>
                            <Link to={`/user/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                              <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                              <div>
                                  {question.userPosted}
                              </div>
                            </Link>
                          </div>
                        </div>

                      </div>

                    </section>
                    {
                      question.noOfAnswers !== 0 && (
                        <section>
                          <h3>{question.noOfAnswers} answers</h3>
                          <DisplayAnswer key={question._id} question={question}/>
                        </section>
                      )
                    }
                    <section className='post-ans-container'>
                      <h3> Your Answer</h3>
                      <form>
                        <textarea name='' id='' cols='80' rows='10' ></textarea>
                        <input type="submit" className='post-ans-btn ' value='Post Your Answer ' />
                        
                      </form>
                      <p>
                        Browse other Question tagged
                        {
                          question.questionTags.map((tag) => (
                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                          ))
                        } or 
                        <Link to='/AskQuesiton' style={{textDecoration:"none",color:"#009dff"}}> ask your own question</Link>
                      </p>

                    </section>
                  </div>

                ))
            }
        </>
      }
     
    </div>
  )
}

export default QuestionDetails
