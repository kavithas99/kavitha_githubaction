export default class commonAPIutil {

    constructor(Request) {
        this.Request = Request;
    }

    async Authenticationtoken(url) {
        const response = await this.Request.post('https://restful-booker.herokuapp.com/auth', { data: { username: "admin", password: "password123" } });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse.token;

    }
}