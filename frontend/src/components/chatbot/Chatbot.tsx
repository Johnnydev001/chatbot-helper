import {ChatbotView} from "./ChatbotView.tsx";

export const Chatbot =  (
    {displayChatbotIntro = false, setDisplayChatbotIntro = () => {}})  => {

        return <ChatbotView displayChatbotIntro={displayChatbotIntro} setDisplayChatbotIntro={setDisplayChatbotIntro}/>

}