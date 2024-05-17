import { getNumberOfUsers } from '$lib/get-users';
import { json, type RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {

    const number_of_users = await getNumberOfUsers();

    return json({
        number_of_users
    });
}

