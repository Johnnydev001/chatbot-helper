import {useCallback} from "react";

export const ChatView = (
    {displayChatbotIntro = false, setDisplayChatbotIntro = () => {},
        setInputMessage = () => {}}: {
        displayChatbotIntro : boolean, setDisplayChatbotIntro : (displayChatBotIntro: boolean) => void,
setInputMessage : (x: string) => void
    }) => {

    //const [messageInput, setMessageInput] = useState<string>('')

    const handleClick = useCallback((event: { preventDefault: () => void }) => {
        event.preventDefault()
        setDisplayChatbotIntro(!displayChatbotIntro)
    }, [displayChatbotIntro])

    const handleInputChange = (event: { preventDefault: () => void; target: { value: string; }; }) =>  {
        event.preventDefault();
        setInputMessage(event?.target?.value)

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
                               placeholder={'Type a message'} onChange={handleInputChange}/>
                        <button className={'send-btn'} aria-label={'send message'} title={'Send message'}
                                role={"button"}> Send
                        </button>

                    </form>


                </div>


            </div>


        </section>
    )
}