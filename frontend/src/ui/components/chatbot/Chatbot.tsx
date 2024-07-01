import {ChatbotView} from "./ChatbotView.tsx";

export const Chatbot =  (
    {displayChatbotIntro = false, setDisplayChatbotIntro = () => {}}: {
            displayChatbotIntro : boolean, setDisplayChatbotIntro : (displayChatBotIntro: boolean) => void
    })  => {

        return <ChatbotView displayChatbotIntro={displayChatbotIntro} setDisplayChatbotIntro={setDisplayChatbotIntro}/>

}