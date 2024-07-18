import './App.css'
import {Chatbot} from "./ui/components/chatbot/Chatbot.tsx";
import {Suspense, useState} from "react";
import {CustomCanvas} from "./ui/components/customCanvas/CustomCanvas.tsx";
import {Loader} from "@react-three/drei";

function App() {

  const [displayChatbotIntro, setDisplayChatbotIntro] = useState<boolean>(true)

  return (
      <>
        <Loader/>
        <CustomCanvas/>
      </>


  )



  //displayChatbotIntro ?  <Chatbot displayChatbotIntro={displayChatbotIntro} setDisplayChatbotIntro={setDisplayChatbotIntro}/> :
      // <Chat displayChatbotIntro={displayChatbotIntro} setDisplayChatbotIntro={setDisplayChatbotIntro}/>

}

export default App
