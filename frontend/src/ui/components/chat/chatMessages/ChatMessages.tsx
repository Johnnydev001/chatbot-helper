import './chatMessages.scss';
import {ChatMessage} from "./ChatMessage.tsx";

export type ChatMessageType = {
    message: string;
    sender: string;
}

export type ChatMessageTypeWithTime = {
    message: string;
    sender: string;
    time:string;
}
export const ChatMessages = ({chatMessages = []}: {chatMessages: Array<ChatMessageTypeWithTime>}) => {

    const mapChatMessages = () => {
        return( <ul role={'list'} className={'chat-messages-container'}>

            {
                chatMessages?.length > 0 && chatMessages.map((message, index = 0) => {
                    return <li className={'chat-message'} key={index}>
                        <ChatMessage sender={message?.sender} message={message?.message} />
                        <time className={'chat-message-time'} dateTime={message?.time}>{message?.time}</time>
                    </li>
                })
            }

        </ul>)
    }

    return (mapChatMessages())


}