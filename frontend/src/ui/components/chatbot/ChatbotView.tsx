import './chatbot.scss'

export const ChatbotView = (
    {displayChatbotIntro = false, setDisplayChatbotIntro = () => {}}: {
        displayChatbotIntro: boolean, setDisplayChatbotIntro: (displayChatBotIntro: boolean) => void
    }) => {

    const handleClick = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        setDisplayChatbotIntro(!displayChatbotIntro)
    }

    return (
        <section aria-label={'chatbot section'} className={'chatbot-container'}>

            <img src={'/imgs/chatbot.jpg'} alt={'Chatbot'} className={'chatbot'}/>
            <h1 className={'heading'}>Hi there!</h1>

            <div className={'chatbot-sub-container'}>

                <h2 className={'sub-heading'}>My name is Johnny.</h2>
                <button onClick={handleClick} className={'btn'} role={"button"} title={"ask question button"}>
                    Ask me a question

                </button>
            </div>


        </section>
    )


}