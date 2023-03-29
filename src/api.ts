const BASE = "https://jsonplaceholder.typicode.com";

export const api = {
    getAllPosts: async () => {
        let url = `${BASE}/posts`;
        let response = await fetch(url);
        let json = await response.json();
        return json;
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        let url = `${BASE}/posts`;
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ title, body, userId }),
            headers: { 'Content-Type': 'application/json' }
        });
        let json = await response.json();
        return json;
    }
}