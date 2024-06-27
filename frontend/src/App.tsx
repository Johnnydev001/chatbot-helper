import './App.css'
import {Chatbot} from "./components/chatbot/Chatbot.tsx";
import {Chat} from "./components/chat/Chat.tsx";
import {useState} from "react";

function App() {

  const [displayChatbotIntro, setDisplayChatbotIntro] = useState<boolean>(true)

  return displayChatbotIntro ?  <Chatbot displayChatbotIntro={displayChatbotIntro} setDisplayChatbotIntro={setDisplayChatbotIntro}/> :
      <Chat displayChatbotIntro={displayChatbotIntro} setDisplayChatbotIntro={setDisplayChatbotIntro}/>

}

export default App
