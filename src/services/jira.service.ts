import axios from "axios";
import secretConfig from "../config/secret.config";
import { users } from "../config/user.config";

export async function getTaskCount(userCode: string): Promise<number> {
    const token: string = btoa(secretConfig.AdminEmail+ ':'+ secretConfig.ApiKey)

    const response: any = await axios.get(`${secretConfig.JiraApiUrl}?jql=${secretConfig.Query + userCode}&maxResults=0`, {
        headers: {
            Authorization: `Basic ${token}`,
            Accept: 'application/json',
        },
    })
    console.log(`Basic ${token}`)

    return response.data.total
}

export async function getTotalBugCount() {
    let totalBugCount: number = 0

    for (const user of users) {
        if (user.code !== '') {
            const taskCount = await getTaskCount(user.code)
            totalBugCount += taskCount
        }
    }

    return totalBugCount
}
