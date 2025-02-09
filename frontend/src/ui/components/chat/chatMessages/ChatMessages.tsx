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
export const ChatMessages = ({ setIsControlsEnabled = () => {},chatMessages = []}: {setIsControlsEnabled: (isControlsEnabled: boolean) => void,chatMessages: Array<ChatMessageTypeWithTime>}) => {

    const mapChatMessages = () => {
        return( <ul role={'list'} className={'chat-messages-container'}
                    >

            {
                chatMessages?.length > 0 && chatMessages.map((message, index = 0) => {

                    return <li
                        className={`chat-message ${message?.sender === 'user' ? 'chat-message-left' : 'chat-message-right'}`}
                        key={index}>
                        <ChatMessage sender={message?.sender} message={message?.message}/>

                        <div className={'chat-message-time'}>

                            <time  dateTime={message?.time}>{message?.time}</time>

                        </div>

                    </li>
                })
            }

        </ul>)
    }

    return (mapChatMessages())


}