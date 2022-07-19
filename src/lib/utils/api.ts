import Cookies from 'js-cookie'
import {handleSession} from "./auth";

export const api = async (query : any) => {
    const token = Cookies.get('token');
    try {
        const res = await fetch('http://192.168.0.13:4000/graphql/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                ...(token ? {
                    Authorization: `Bearer ${token}`
                } : {})
            },
            body: JSON.stringify({query})
        })

        await handleSession(res);
        return await res.json()
    } catch (e) {
        return {status: 502, message: 'Oops! Something is wrong. Please try later.'}
    }
}
