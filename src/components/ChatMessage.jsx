
//import { useState, useRef, useEffect } from 'react';
//import Chatbot from './Chatbot.js';
import Bot from '/Users/bana/Desktop/react_learning/chatbot-project/src/assets/Bot.png';
import userImg from '/Users/bana/Desktop/react_learning/chatbot-project/src/assets/userImg.png';



export function ChatMessage({ message, sender }) {
    //const message=props.message;
    //const sender=props.sender;
    //const {message,sender}=props;

    /* if(sender === "user")
     {
    return (
       <div>
        {message} 
       <img src="/userImg.png" width ="50" style={{ borderRadius:'50%' }} />
       </div>
     );
     }else
     {
    return (
     <div>
       <img src="/Bot.png" width ="50" style={{ borderRadius:'50%' }} />
        {message}
     </div>
    );
    }*/
    return (
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-bot'}>
            {sender === 'robot' && (
                <img src={Bot} width="50" style={{ borderRadius: '50%' }} alt="Robot" />
            )}
            <p className="message-styling">{message}</p>

            {sender === 'user' && (
                <img src={userImg} width="50" style={{ borderRadius: '50%' }} alt="User" />
            )}
        </div>
    );
}