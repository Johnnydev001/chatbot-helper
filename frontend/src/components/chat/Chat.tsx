import './chat.scss'
import {ChatView} from "./ChatView.tsx";
export const Chat = (
    {displayChatbotIntro = false, setDisplayChatbotIntro = () => {}}) => {
    return (
        <ChatView  displayChatbotIntro={displayChatbotIntro} setDisplayChatbotIntro={setDisplayChatbotIntro}/>

    )
}