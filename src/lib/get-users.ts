import { app } from '$lib/firebase-admin';

export const getNumberOfUsers = async () => {

    const projectID = app.options.projectId;

    const token = await app.options.credential?.getAccessToken();

    if (!token) {
        throw 'No token!';
    }

    const url = `https://identitytoolkit.googleapis.com/v1/projects/${projectID}/accounts:query?alt=json`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.access_token}`
        },
        body: JSON.stringify({
            "returnUserInfo": false,
            "expression": []
        })
    };

    return await fetch(url, options).then(response => response.json());

};