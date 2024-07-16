import dotenv from 'dotenv'
dotenv.config()
import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY
});

const resolvers = {
    Query: {
        getMessages: async(parent,  args, context) => {
            return ['messg1', 'msg2']
        }
    },
    Mutation:{
        sendMessage: async (parent,  args, context) => {
            const { message = ''} = args;
            try{
                const response = openai.chat.completions.create({
                    messages: [{ role: "system", content: "You are a helpful assistant." }],
                    model: "gpt-3.5-turbo",
                })

                return response.json();
            }catch (e){
                console.error('Error getting response from OpenAI', e)
            }
        }
    }
}

export default resolvers