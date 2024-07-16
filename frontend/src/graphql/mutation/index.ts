import {gql} from "@apollo/client";

export const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessageMutation($message: String!) {
    sendMessage(message: $message)
  }
`;