import './chat.scss'
import {ChatView} from "./ChatView.tsx";
import {useState} from "react";

export const Chat = (
    {displayChatbotIntro = false, setDisplayChatbotIntro = () => {}}: {
        displayChatbotIntro: boolean, setDisplayChatbotIntro: (displayChatBotIntro: boolean) => void
    }) => {

    const [inputMessage, setInputMessage] = useState<string>('')

    return (
        <ChatView  displayChatbotIntro={displayChatbotIntro} setDisplayChatbotIntro={setDisplayChatbotIntro} setInputMessage={setInputMessage}/>

    )
}