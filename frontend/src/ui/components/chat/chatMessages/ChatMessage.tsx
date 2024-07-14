import './chatMessages.scss';
import { ChatMessageType } from "./ChatMessages"

export const ChatMessage = ({sender= '', message =  '' }: ChatMessageType) => {

    return <article className={`chat-message-content ${sender === 'user' ? 'chat-message-content-left': 'chat-message-content-right' }`}>

        <span className={'chat-message-text'}> {message}</span>

    </article>

}