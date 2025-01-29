import { provide } from "@expressots/core";

@provide(AppUseCase)
export class AppUseCase {

    // Get all characters
    async execute() {
        try {
            // Get API_URL_rickandmortyapi from .env
            const apiUrl = process.env.API_URL_rickandmortyapi + "character";

            // Get results from apiUrl
            const results = fetch(apiUrl).then(response => response.json());
            
            // Return results
            return await results;
            
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    // Get one episode by id
    async getOne(id: string) {
        try {
            // Get API_URL_rickandmortyapi from .env
            const apiUrl = `${process.env.API_URL_rickandmortyapi}character/${id}`;

            // Get results from apiUrl
            const results = await fetch(apiUrl).then(response => response.json());

            return await results;

        } catch (error) {
            console.error(error);
            return error;
        }
    }
}