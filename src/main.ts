import { getTotalBugCount } from "./services/jira.service";
import { createMessage, sendMessage } from "./services/discord.service";

async function main(): Promise<void> {
    const totalAmount = await getTotalBugCount()
    try {
        const embedMessage = await createMessage(totalAmount)
        await sendMessage(embedMessage)
    }
    catch (error) {
        console.error('Ошибка:', error)
    }
}

main()
