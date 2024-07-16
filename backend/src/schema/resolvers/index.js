const resolvers = {
    Query: {
        getMessages: async(parent,  args, context) => {
            return ['messg1', 'msg2']
        }
    },
    Mutation:{
        sendMessage: async (parent,  args, context) => {
            return ['message sent']
        }
    }
}

export default resolvers