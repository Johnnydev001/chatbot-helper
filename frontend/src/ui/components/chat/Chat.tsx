import './chat.scss'
import {ChatView} from "./ChatView.tsx";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {ChatMessageTypeWithTime} from "./chatMessages/ChatMessages.tsx";
import {useMutation} from "@apollo/client";
import {SEND_MESSAGE_MUTATION} from "../../../graphql/mutation";

export const Chat = (
    {displayChatbotIntro = false, setDisplayChatbotIntro = () => {}}: {
        displayChatbotIntro: boolean, setDisplayChatbotIntro: (displayChatBotIntro: boolean) => void
    }) => {

    const [sendMessage, { data }] = useMutation(SEND_MESSAGE_MUTATION);

    const [inputMessage, setInputMessage] = useState<ChatMessageTypeWithTime>({sender: '', message: '', time: ''})

    const [messagesList, setMessagesList] = useState<Array<ChatMessageTypeWithTime>>([])

    const handleBackClick = useCallback((event: { preventDefault: () => void }) => {
        event.preventDefault()
        setDisplayChatbotIntro(!displayChatbotIntro)
    }, [displayChatbotIntro, setDisplayChatbotIntro])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>  {
        event.preventDefault();
        setInputMessage({
            sender: 'user',
            message: event?.target?.value,
            time: new Date().getTime().toString()
        })

    }

    const handleFormSubmit = () => {

        sendMessage({
            variables: {
                message: inputMessage.message
            }
        }).then(r => console.log(r, data)).catch(error => console.error(error))
        setMessagesList((messages) => [...messages, inputMessage])
    }

    useEffect(() => {
        if (data?.sendMessage){
            const chatbotMessage = {
                sender: 'chatbot',
                message: data.sendMessage,
                time: new Date().getTime().toString()
            }
            setMessagesList((messages) => [...messages, chatbotMessage])

        }

    }, [data?.sendMessage])

    return (
        <ChatView  messagesList={messagesList} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} handleBackClick={handleBackClick}/>

    )
}