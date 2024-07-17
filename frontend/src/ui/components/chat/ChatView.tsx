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

    }: {
        handleBackClick:  (event: { preventDefault: () => void }) => void,
        handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
        handleFormSubmit: () => void,
        messagesList: Array<ChatMessageTypeWithTime>,
    }) => {

    return (
        <section className={'chat-container'}>

            <div className={'navigation'}>
                <button className={'back-btn'} aria-label={'go back'} title={'Go back'} role={"button"} onClick={handleBackClick}><BackIcon/></button>
                <h1 className={'heading'}>Johnny</h1>

            </div>

            <div className={'chat-sub-container'}>

                <div className={'chat-messages'}>

                    {messagesList?.length > 0 && (
                        <ChatMessages chatMessages={messagesList}/>

                    )}
                </div>
                <div className={'btns-container'}>

                    <article className={'submit-form'} >
                        <input aria-label={'text input'} className={'text-input'} type={'text'} title={'Type a message'}
                               placeholder={'Type a message'} onChange={handleInputChange}/>
                        <button className={'send-btn'} aria-label={'send message'} title={'Send message'}
                                role={"button"} onClick={handleFormSubmit}> <SendIcon/>
                        </button>

                    </article>


                </div>


            </div>


        </section>
    )
}