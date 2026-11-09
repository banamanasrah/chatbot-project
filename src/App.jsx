import './App.css';
import { useState, useRef, useEffect } from 'react';
import Chatbot from './Chatbot.js';
//import Bot from './assets/Bot.png';
//import userImg from './assets/userImg.png';
import { ChatInput } from './components/ChatInput.jsx';
import { ChatMessage } from './components/ChatMessage.jsx';



function App() {
  //the other way to get values from the array is by :
  /*const array=React.useState([])
  const chatMessagesArr=arry[0];
  const setChatMessagesArr=array[1];*/
  const [chatMessagesArr, setChatMessagesArr] = useState([
    /* {
       message: 'Hello Chatbot',
       sender: 'user',
       id: 'id1',
     },
     {
       message: 'Hello!How can I help you?',
       sender: 'robot',
       id: 'id2',
     },
     {
       message: 'can you get me todays date?',
       sender: 'user',
       id: 'id3',
     },
     {
       message: 'Today is November 1',
       sender: 'robot',
       id: 'id4',
     },
     {
       message: 'Thank you so much',
       sender: 'user',
       id: 'id5',
     },
     {
       message: 'you are welcomed!',
       sender: 'robot',
       id: 'id6',
     },*/
  ]);

  const chatmessagesRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  function sendingAddMessage(inputText) {
    const newChatMessages = [
      ...chatMessagesArr,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
      },
    ];
    setChatMessagesArr(newChatMessages);
    setIsLoading(true);

    setTimeout(() => {
      const response = Chatbot.getResponse(inputText);
      setChatMessagesArr([
        ...newChatMessages,
        {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID(),
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    const containerElem = chatmessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessagesArr]);

  const chatMessageComponents = chatMessagesArr.map((chatMessage) => {
    return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
        key={chatMessage.id}
      />
    );
  });

  return (
    <div className="app-container">
      <div className="chat-messages-container" ref={chatmessagesRef}>
        {chatMessageComponents}
      </div>
      {isLoading && <div className="loading-spinner">Loading...</div>}
      <div className="input-container">
        <ChatInput onSend={sendingAddMessage} />
      </div>
    </div>
  );
}

export default App;
