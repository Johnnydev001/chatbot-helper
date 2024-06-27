import {useState} from "react";

export const ChatView = (
    {displayChatbotIntro = false, setDisplayChatbotIntro = () => {},
        setInputMessage = () => {}}) => {

    const [messageInput, setMessageInput] = useState<string>('')

    const handleClick = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        setDisplayChatbotIntro(!displayChatbotIntro)
    }

    const handleInputChange = (event: any) =>  {

        event.preventDefault();
        console.log('event, event', event)

    }

    const handleFormSubmit = () => {

    }


    return (
        <section className={'chat-container'}>

            <div className={'navigation'}>
                <button className={'back-btn'} aria-label={'go back'} title={'Go back'} role={"button"} onClick={handleClick}>Back</button>
                <h1 className={'heading'}>Johnny</h1>

            </div>

            <div className={'chat-sub-container'}>

                <div className={'chat-container'}></div>
                <div className={'btns-container'}>

                    <form className={'submit-form'} onSubmit={handleFormSubmit}>
                        <input aria-label={'text input'} className={'text-input'} type={'text'} title={'Type a message'}
                               placeholder={'Type a message'} onChange={handleInputChange} on/>
                        <button className={'send-btn'} aria-label={'send message'} title={'Send message'}
                                role={"button"}> Send
                        </button>

                    </form>


                </div>


            </div>


        </section>
    )
}