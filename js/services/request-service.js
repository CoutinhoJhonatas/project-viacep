import RequestException from "./exceptions/request-exception.js";

export async function getJson(url) {
    try {
        const response = await fetch(url);
        const jsonBdoy = await response.json();
        return jsonBdoy;
    } catch (error) {
        throw new RequestException("Erro ao realizar requisição")
    }
}