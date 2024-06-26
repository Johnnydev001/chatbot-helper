import './chatbot.scss'

export const ChatbotView = () => {

    return (
        <section aria-label={'chatbot section'} className={'container'}>

            <img src={'/imgs/chatbot.jpg'} alt={'Chatbot'} className={'chatbot'}/>
            <h1 className={'heading'}>Hello</h1>

            <div className={'sub-container'}>

                <h2 className={'sub-heading'}>My name is Johnny.</h2>
                <p className={'description'}>I am here to help you with everything you need.</p>

            </div>

            <button className={'btn'} role={"button"} title={"ask question button"}>
                Ask me a question

            </button>


        </section>
    )


}