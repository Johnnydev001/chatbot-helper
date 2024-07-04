import {ChatMessage} from "./ChatMessage.tsx";

export type ChatMessageType = {
    sender: string;
    message: string;
    time: string
}
export const ChatMessages = ({chatMessages = []}: {chatMessages: ChatMessageType[]}) => {

    const mapChatMessages = () => {
        return( <ul role={'list'} className={'chat-messages-container'}>

            {
                chatMessages?.map(message => {
                    return <li>
                        <ChatMessage sender={message?.sender} message={message?.message} time={message?.time}/>
                    </li>
                })
            }

        </ul>)
    }

    return (mapChatMessages())


}