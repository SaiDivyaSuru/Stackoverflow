// import React from 'react'
// import {useLocation,useNavigate} from 'react-router-dom'
// import './HomeMainbar.css'
// import QuestionsList from './QuestionsList'

// const HomeMainbar = () => {
//   const location = useLocation()
//   const user = 1;
//   const navigate = useNavigate()
//   var questionList =[{
//     _id:1,
//     votes:3,
//     noOfAnswers:2,
//     questionTitle:"What is a function?",
//     questionBody:"It meant to be",
//     questionTags:["java","node.js","react.js","mongodb"],
//     userPosted:"sai",
//     askedOn:"jan 1",
//     answer:[{
//       answerBody:"Answer",
//       userAnswered:'kumar',
//       answeredOn:"jan 2",
//       userId:2,
//     }]
//   },
//   {
//     _id:2,
//     votes:0,
//     noOfAnswers:0,
//     questionTitle:"What is a function?",
//     questionBody:"It meant to be",
//     questionTags:["javascript","R","python"],
//     userPosted:"sai",
//     askedOn:"jan 1",
//     answer:[{
//       answerBody:"Answer",
//       userAnswered:'kumar',
//       answeredOn:"jan 29",
//       userId:2,
//     }]
//   },
//   {
//     _id:3,
//     votes:1,
//     noOfAnswers:0,
//     questionTitle:"What is a function?",
//     questionBody:"It meant to be",
//     questionTags:["javascript","R","Python"],
//     userPosted:"sai",
//     askedOn:"jan 1",
//     answer:[{
//       answerBody:"Answer",
//       userAnswered:'kumar',
//       answeredOn:"jan 23",
//       userId:2,
//     }]
//   }
// ]

// const checkAuth =() => {
//   if(user === null){
//     alert("Login or Signup to ask a question")
//     navigate('/Auth')
//   }else{
//     navigate('/AskQuestion')
//   }
// }
//   return (
//     <div className='main-bar'>
//       <div className='main-bar-header'>
//         {
//           location.pathname ==='/' ? <h1>Top Questions</h1>:<h1>All Questions</h1>
//         }
//         <button  onClick={checkAuth}className='ask-btn'>Ask Question</button>
//         <div>
//           {
//             questionList === null ? 
//             <h1>Loading...</h1> : 
//             <>
//               <p>{questionList.length} questions</p>
//               <QuestionsList questionList = {questionList} />
//             </>
//           }

//         </div>

//       </div>
      
//     </div>
//   )
// }

// export default HomeMainbar

import React from 'react'
import { useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
// import Questions from './Questions'

import QuestionList from './QuestionList'
const HomeMainbar = () => {
    const user =1;
    const navigate = useNavigate()
    const location = useLocation()
var questionList =[{
    _id:1,
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
    _id:2,
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
    _id:3,
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
const checkAuth =() => {
  if(user === null){
    alert("Login or Signup to ask a question")
    navigate('/Auth')
  }else{
    navigate('/AskQuestion')
  }
}
  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
            {
                location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
            }
            {/* <Link to='/AskQuestion' className='ask-btn'>Ask Question</Link> */}
            <button  onClick={checkAuth}className='ask-btn'>Ask Question</button>
        </div>
        <div>
            {
                questionList === null ?
                <h1>Loading...</h1> :
                <>
                    <p>{questionList.length} questions</p>
                    <QuestionList questionList = {questionList} />
                   
                </>
            }
        </div>
        
      
    </div>
  )
}

export default HomeMainbar

