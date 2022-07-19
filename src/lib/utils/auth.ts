import Cookies from 'js-cookie';
import { browser } from '$app/env';

export const handleSession = async (res: {
    status: number;
}) => {
    if (res.status === 440) {
        await logout()
    }
}

export const getCookieItem = async (key: string) => {
    return Cookies.get(key)
}

export const logout = async () => {
    await removeCookie('token')
    await removeCookie('id')
    await removeCookie('role')
    if (browser) {
        window.location.replace('/')
    }
}

export const setCookie = async (key: string, value: string) => {
    Cookies.set(key, value, {expires: 2});
}

export const removeCookie = async (key: string) => {
    if (browser) {
        Cookies.remove(key)
    }
}

export const authenticate = async (data) => {
    if (browser) {
        await setCookie('token', data.token);
        await setCookie('id', data['_id']);
        await setCookie('role', data.role)
    }

}
