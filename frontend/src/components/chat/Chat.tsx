import './chat.scss'
export const Chat = () => {
    return (

        <section className={'container'}>

            <div className={'navigation'}>
                <button className={'back-btn'} aria-label={'go back'} title={'Go back'} role={"button"}> Back </button>
                <h1 className={'heading'}>Johnny</h1>


            </div>

            <div className={'sub-container'}>

                <div className={'chat-container'}></div>
                <div className={'btns-container'}>

                    <input aria-label={'text input'} className={'text-input'} type={'text'} title={'Type a message'} placeholder={'Type a message'}/>
                    <button className={'send-btn'} aria-label={'send message'} title={'Send message'} role={"button"}> Send
                    </button>
                </div>


            </div>


        </section>
    )
}