import {configDotenv} from "dotenv";

configDotenv()

export default {
    JiraApiUrl: process.env.JIRA_URL ?? '',
    DiscordWebhook: process.env.DISCORD_WEBHOOK ?? '',
    BasicToken: process.env.BASIC_AUTH_TOKEN ?? '',
    JiraBoardUrl: process.env.JIRA_BOARD_URL ?? '',
    AdminEmail: process.env.ADMIN_EMAIL ?? '',
    ApiKey: process.env.API_KEY ?? '',
    Query: process.env.JQL_QUERY ?? ''
}
