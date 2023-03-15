import { ENV } from "../utils";


export class Recordatorios {
    baseApi = ENV.URL;

    async createRecordatorio(accessToken , recordatorio) {
        const response = await fetch(`${this.baseApi}/recordatorios/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${accessToken}`
            },
            body: JSON.stringify(recordatorio),
        });
        return await response.json();
    }

    async toggleRecordatorio(id,accessToken) {
        const response = await fetch(`${this.baseApi}/recordatorios/toggle/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${accessToken}`
            }
        });
        return await response.json();
    }

}