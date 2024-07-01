import {ChatMessage} from "./ChatMessage.tsx";

export const ChatMessages = ({chatMessages = []}: {chatMessages: any[]}) => {

    const mapChatMessages = () => {
        return( <ul role={'list'} className={'chat-messages-container'}>

            {
                chatMessages?.map(message => {
                    return <li>
                        <ChatMessage sender={message?.sender} message={message?.text} time={message?.time}/>
                    </li>
                })
            }

        </ul>)
    }

    return (mapChatMessages())


}