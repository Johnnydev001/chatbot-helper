const messageService = require('../services/MessageService');
export const messageResolver = {
    Query:{
        sendMessage: async (_: any, {message}: { message: string }) => {

            return await messageService.sendMessage(message);
        }
    }
}