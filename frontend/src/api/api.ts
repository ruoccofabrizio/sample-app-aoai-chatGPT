import { ChatMessage, ConversationRequest } from "./models";

export async function conversationApi(options: ConversationRequest, abortSignal: AbortSignal): Promise<ChatMessage> {
    const response = await fetch("/conversation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messages: options.messages
        }),
        signal: abortSignal
    });

    const parsedResponse: ChatMessage = await response.json();
    if (response.status > 299 || !response.ok) {
        alert("Unknown error");
        throw Error("Unknown error");
    }

    return parsedResponse;
}
