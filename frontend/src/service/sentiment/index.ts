import sentiment from 'wink-sentiment'

export const getSentimentFromMessage = (message: string = '') => {

    try {
        const sentimentResult = sentiment(message)
        const { score = 0 } = sentimentResult;
        return score;
    } catch (error) {
     console.error('Failed to get sentiment from message. due to:', error)
    }


}