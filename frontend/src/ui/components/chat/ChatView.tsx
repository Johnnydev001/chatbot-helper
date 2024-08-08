import {ChatMessages, ChatMessageTypeWithTime} from "./chatMessages/ChatMessages.tsx";
import {ChangeEvent} from "react";
// @ts-ignore
import {SendIcon} from "../../icons/SendIcon.tsx";
export const ChatView = (
    {
        setIsTyping = () => {},
        handleInputChange = () => {},
        handleFormSubmit = () => {},
        messagesList = [],
        displayBadSentimentMessage = false,
        setIsControlsEnabled = () => {}

    }: {
        setIsTyping: (isTyping: boolean) => void,
        handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
        handleFormSubmit: (event: {preventDefault: () => void}) => void,
        messagesList: Array<ChatMessageTypeWithTime>,
        displayBadSentimentMessage: boolean,
        setIsControlsEnabled: (isControlsEnabled: boolean) => void
    }) => {

    return (
        <section className={'chat-container'} onPointerOver={() => setIsControlsEnabled(false)} onPointerOut={() => setIsControlsEnabled(true)} >


            <div className={'chat-sub-container'}>

                <div className={'chat-messages'}>

                    {messagesList?.length > 0 && (
                        <ChatMessages chatMessages={messagesList}/>

                    )}
                </div>
                <form onSubmit={handleFormSubmit} className={'btns-container'}>

                    <article className={'submit-form'} >
                        <input aria-label={'text input'} className={'text-input'} type={'text'} title={'Type a message'}
                               onClick={() => setIsTyping(true)}
                               placeholder={'Type a message and click enter...'} onChange={handleInputChange}/>


                    </article>

                    {displayBadSentimentMessage && (
                        <p className={'bad-sentiment-message'}>Sorry, I can't send negative messages.</p>
                    )}


                </form>


            </div>


        </section>
    )
}