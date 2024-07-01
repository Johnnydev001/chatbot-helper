
export const ChatMessage = ({sender = '', message =  '', time = '' }: { sender: string, message: '', time: string}) => {

    return <article className={'chat-message'}>

        <h1>{sender}</h1>
        <p> {message}</p>
        <time dateTime={time}>{time}</time>

    </article>

}