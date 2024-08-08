import './chat.scss'
import {ChatView} from "./ChatView.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {ChatMessageTypeWithTime} from "./chatMessages/ChatMessages.tsx";
import {gql, useMutation} from "@apollo/client";
import {getSentimentFromMessage} from "../../../service/sentiment";
const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessageMutation($message: String!) {
    sendMessage(message: $message)
  }
`;
export const Chat = (

    { setIsTyping = () => {}, isChatbotAngry = false,  setIsChatbotAngry =() => {}, setIsControlsEnabled = () => {}}: {
        setIsTyping: (isTyping: boolean) => void,
        isChatbotAngry: boolean,
        setIsChatbotAngry: (isChatbotAngry: boolean) => void,
        setIsControlsEnabled: (isControlsEnabled: boolean) => void,
    }) => {

    const [mutateFunction, { data }] = useMutation(SEND_MESSAGE_MUTATION);

    const [inputMessage, setInputMessage] = useState<ChatMessageTypeWithTime>({sender: '', message: '', time: ''})

    const [messagesList, setMessagesList] = useState<Array<ChatMessageTypeWithTime>>([])


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
        mutateFunction({
            variables: {
                message: inputMessage.message
            }
        })
        setMessagesList((messages) => [...messages, inputMessage])
    }

    useEffect(() => {
        const sentimentFromMessage = getSentimentFromMessage(inputMessage?.message)

        if (sentimentFromMessage < 0) {
            setIsChatbotAngry(true)
        } else {
            setIsChatbotAngry(false)
        }
    }, [inputMessage?.message]);

    useEffect(() => {
        if (data?.sendMessage){

            const messagesFromChatbot = data?.sendMessage.split('.') || data?.sendMessage.split('?') || data?.sendMessage.split('!')

            const mappedMessagesFromChatbot =  messagesFromChatbot?.map((elem: string = '') => {
                return {
                    sender: 'chatbot',
                    message: elem,
                    time: new Intl.DateTimeFormat('pt-PT').format(new Date())
                }
            })

            setMessagesList((messages) => [...messages, ...mappedMessagesFromChatbot])

        }

    }, [data?.sendMessage])

    return (
        <ChatView setIsControlsEnabled={setIsControlsEnabled} setIsTyping={setIsTyping} displayBadSentimentMessage={isChatbotAngry} messagesList={messagesList} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} />

    )
}