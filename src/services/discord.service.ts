import axios from "axios";
import secretConfig from "../config/secret.config";
import {users} from "../config/user.config";
import {getTaskCount} from "./jira.service";

export async function sendMessage(embedMessage: any) {
    await axios.post(secretConfig.DiscordWebhook, embedMessage, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export async function createMessage(totalAmount: any) {
    const embedFields = []

    for (const user of users) {
        if (user.code !== '') {
            const taskCount = await getTaskCount(user.code)
            const jiraLink = `${secretConfig.JiraBoardUrl}+${user.code}`

            embedFields.push({
                name: `:beginner: ${user.name}`,
                value: `Opened Tasks: ${taskCount}. [Link on the Board](${jiraLink}) \n`,
            })
        }
    }

    return {
        content: '@here',
        embeds: [{
            title: ':fire: Bug report Jira',
            description: `Total amount tickets: ${totalAmount}  \n ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯`,
            color: 0xFFA500,
            fields: embedFields,
        }],
    }
}
