import './chat.scss'
import {ChatView} from "./ChatView.tsx";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {ChatMessageTypeWithTime} from "./chatMessages/ChatMessages.tsx";
import {useMutation} from "@apollo/client";
import {SEND_MESSAGE_MUTATION} from "../../../graphql/mutation";
import {getSentimentFromMessage} from "../../../service/sentiment";

export const Chat = (
    {displayChatbotIntro = false, setDisplayChatbotIntro = () => {}}: {
        displayChatbotIntro: boolean, setDisplayChatbotIntro: (displayChatBotIntro: boolean) => void
    }) => {

    //const [mutateFunction, { data, loading, error }] = useMutation(SEND_MESSAGE_MUTATION);

    const [inputMessage, setInputMessage] = useState<ChatMessageTypeWithTime>({sender: '', message: '', time: ''})

    const [messagesList, setMessagesList] = useState<Array<ChatMessageTypeWithTime>>([])

    const [displayBadSentimentMessage, setDisplayBadSentimentMessage] = useState<boolean>(false)

    const handleBackClick = useCallback((event: { preventDefault: () => void }) => {
        event.preventDefault()
        setDisplayChatbotIntro(!displayChatbotIntro)
    }, [displayChatbotIntro, setDisplayChatbotIntro])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>  {
        event.preventDefault();

        setInputMessage({
            sender: 'user',
            message: event?.target?.value,
            time: new Intl.DateTimeFormat('pt-PT').format(new Date())
        })

    }

    const handleFormSubmit = async (e: { preventDefault: () => void; }) => {

        e.preventDefault()
        // await mutateFunction({
        //     variables: {
        //         message: inputMessage.message
        //     }
        // })
        setMessagesList((messages) => [...messages, inputMessage])
    }

    useEffect(() => {
        const sentimentFromMessage = getSentimentFromMessage(inputMessage?.message)

        if (sentimentFromMessage < 0) {
            setDisplayBadSentimentMessage(true)
        } else {
            setDisplayBadSentimentMessage(false)
        }
    }, [inputMessage?.message]);

    // useEffect(() => {
    //     if (data?.sendMessage){
    //
    //         const messagesFromChatbot = data?.sendMessage.split('.') || data?.sendMessage.split('?') || data?.sendMessage.split('!')
    //
    //         const mappedMessagesFromChatbot =  messagesFromChatbot?.map((elem: string = '') => {
    //             return {
    //                 sender: 'chatbot',
    //                 message: elem,
    //                 time: new Intl.DateTimeFormat('pt-PT').format(new Date())
    //             }
    //         })
    //
    //         setMessagesList((messages) => [...messages, ...mappedMessagesFromChatbot])
    //
    //     }
    //
    // }, [data?.sendMessage])

    return (
        <ChatView displayBadSentimentMessage={displayBadSentimentMessage} messagesList={messagesList} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} handleBackClick={handleBackClick}/>

    )
}