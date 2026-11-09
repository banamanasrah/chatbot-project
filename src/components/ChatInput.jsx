
import { useState } from 'react';
//import Chatbot from './Chatbot.js';


export function ChatInput({ onSend }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function buttonClicked() {
    if (!inputText.trim()) return;
    onSend(inputText);
    //console.log(textEntered);
    setInputText('');
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      buttonClicked();
    }
  }

  return (
    <div className="box">
      <input
        //id="#b"
        placeholder="Send a message to Chatbot ..."
        size="40"
        value={inputText}
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        className="input-field"
      />
      <button onClick={buttonClicked} className="send-button">
        Send
      </button>
    </div>
  );
}

//  export defaulf ChatInput;