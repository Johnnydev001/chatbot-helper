import {ChatMessages, ChatMessageTypeWithTime} from "./chatMessages/ChatMessages.tsx";
import {ChangeEvent} from "react";
export const ChatView = (
    {
        handleInputClick = () => {},
        handleInputChange = () => {},
        handleFormSubmit = () => {},
        messagesList = [],
        displayBadSentimentMessage = false,
        setIsControlsEnabled = () => {}

    }: {
        handleInputClick: () => void,
        handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
        handleFormSubmit: (event: {preventDefault: () => void}) => void,
        messagesList: Array<ChatMessageTypeWithTime>,
        displayBadSentimentMessage: boolean,
        setIsControlsEnabled: (isControlsEnabled: boolean) => void
    }) => {



    return (
        <section className={'chat-container'} onPointerOver={() => setIsControlsEnabled(false)} onPointerOut={() => setIsControlsEnabled(true)} >


            <div className={'chat-sub-container'}>

                <div className={'chat-messages'} >

                    {messagesList?.length > 0 && (
                        <ChatMessages setIsControlsEnabled={setIsControlsEnabled} chatMessages={messagesList}/>

                    )}
                </div>
                <form onSubmit={handleFormSubmit} className={'btns-container'}>

                    <article className={'submit-form'} >
                        <input aria-label={'text input'} className={'text-input'} type={'text'} title={'Type a message'}
                               onClick={handleInputClick}
                               placeholder={'Send a message...'} onChange={handleInputChange}/>


                    </article>

                    {displayBadSentimentMessage && (
                        <p className={'bad-sentiment-message'}>Sorry, I can't send negative messages.</p>
                    )}


                </form>


            </div>


        </section>
    )
}