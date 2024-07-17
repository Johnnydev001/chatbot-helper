import dotenv from 'dotenv'
import {GoogleGenerativeAI} from "@google/generative-ai";

dotenv.config()

const geminiApi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = geminiApi.getGenerativeModel({
    model: "gemini-1.5-flash",
})

const resolvers = {
    Mutation:{
        sendMessage: async (parent,  args, context) => {
            const { message = ''} = args;

            try {
                const result = await model.generateContent(message);
                const response = await result.response;
                return response.text();
            } catch (e){
                console.log('Error getting response from Gemini due to: ' ,e)
            }
        }
    }
}

export default resolvers