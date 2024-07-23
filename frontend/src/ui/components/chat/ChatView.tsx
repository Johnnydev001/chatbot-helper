import {ChatMessages, ChatMessageTypeWithTime} from "./chatMessages/ChatMessages.tsx";
import {ChangeEvent} from "react";
import {BackIcon} from "../../icons/BackIcon.tsx";
// @ts-ignore
import {SendIcon} from "../../icons/SendIcon.tsx";
export const ChatView = (
    {
        handleBackClick = () => {},
        handleInputChange = () => {},
        handleFormSubmit = () => {},
        messagesList = [],
        displayBadSentimentMessage = false

    }: {
        handleBackClick:  (event: { preventDefault: () => void }) => void,
        handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
        handleFormSubmit: (event: {preventDefault: () => void}) => void,
        messagesList: Array<ChatMessageTypeWithTime>,
        displayBadSentimentMessage: boolean
    }) => {

    return (
        <section className={'chat-container'}>


            <div className={'chat-sub-container'}>

                <div className={'chat-messages'}>

                    {messagesList?.length > 0 && (
                        <ChatMessages chatMessages={messagesList}/>

                    )}
                </div>
                <form onSubmit={handleFormSubmit} className={'btns-container'}>

                    <article className={'submit-form'} >
                        <input aria-label={'text input'} className={'text-input'} type={'text'} title={'Type a message'}
                               placeholder={'Type a message and enter...'} onChange={handleInputChange}/>


                    </article>

                    {displayBadSentimentMessage && (
                        <p className={'bad-sentiment-message'}>Sorry, I can't send negative messages.</p>
                    )}


                </form>


            </div>


        </section>
    )
}