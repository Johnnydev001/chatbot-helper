import {MessageType} from "../types/MessageType";
import axios from "axios";
export const sendMessage = async (message: MessageType) => {

    return await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions',{
        prompt: message,
        max_tokens: 150,
        temperature: 0.7,
    },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        })


}