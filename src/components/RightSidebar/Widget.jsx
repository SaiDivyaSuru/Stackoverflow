import React from 'react'
import './RightSidebar.css'
import message from '../../assets/message.svg'
import pen from '../../assets/pen.svg'
import icon from '../../assets/icon.png'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
          <img src={pen} alt="pen" width='15' />
          <p>Observability is key to the future of software (and your Deveops career)</p>
        </div>
        <div className='right-sidebar-div-2'>

          <img src={pen} alt="pen" width='15' />
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
          <img src={message} alt="message" width='15' />
          <p>Please queue workflows - Final release...</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={message} alt="message" width='15' />
          <p>Please welcome Valued Associates: #958-V2Blast #959 -SpencerG</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={icon} alt="icon" width='15' />
          <p>Outdated Answers: accepted answer is now unpinned on stack Overflow</p>

        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
              <p>38</p>
              <p>Why was this spam flag declined, yet the question marked as spam?</p>
        </div>
        <div className='right-sidebar-div-2'>
           <p>20</p>
           <p>What is the best course of action when a user has enough rep to...</p>
        </div>
        <div className='right-sidebar-div-2'>
           <p>14</p>
           <p>is a link to the "How to ask" help page a useful comment?</p>
        </div>
       
      
      
    </div>
  )
}

export default Widget
