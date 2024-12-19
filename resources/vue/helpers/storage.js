import AES from 'crypto-js/aes';
import MD5 from 'crypto-js/md5';
import encUTF8 from 'crypto-js/enc-utf8';

const isDev = JSON.parse(import.meta.env?.VITE_APP_DEBUG ?? false) ?? false;
function decrypt(storage, encKey) {
    return isDev ? storage : AES.decrypt(storage, encKey).toString(encUTF8)
}

export function $getStorage(key) {
    const encKey = isDev ? key : MD5(key).toString();
    const storage = localStorage.getItem(encKey);
    let decObject = storage ? decrypt(storage, encKey) : null;
    if (!decObject || decObject == "undefined" || decObject == "null") return null;
    const localObject = JSON.parse(decObject);
    if (localObject.expired < Date.now()) {
        localStorage.setItem(encKey, null);
        return localObject;
    }
    return localObject.value;
}

export function $setStorage(key, value, cache_expired = 1000 * 60 * 60 * 24 * 356) {
    const encKey = isDev ? key : MD5(key).toString();
    const encObj = {
        expired: Date.now() + cache_expired,
        value: value
    }
    const encStorage = isDev ? JSON.stringify(encObj) : AES.encrypt(JSON.stringify(encObj), encKey).toString();
    localStorage.setItem(encKey, encStorage);
}

export function $destroyStorage(key) {
    const encKey = isDev ? key : MD5(key).toString();
    localStorage.removeItem(encKey);
}

export function $getSession(key) {
    const encKey = isDev ? key : MD5(key).toString();
    const storage = sessionStorage.getItem(encKey);
    let decObject = storage ? decrypt(storage, encKey) : null;
    if (!decObject || decObject == "undefined" || decObject == "null") return null;
    const sessionObject = JSON.parse(decObject);
    if (sessionObject.expired < Date.now()) {
        sessionStorage.setItem(encKey, null);
        return null;
    }
    return sessionObject.value;
}

export function $setSession(key, value, cache_expired = 60000) {
    const encKey = isDev ? key : MD5(key).toString();
    const encObj = {
        expired: Date.now() + cache_expired,
        value: value
    }
    const encSession = isDev ? JSON.stringify(encObj) : AES.encrypt(JSON.stringify(encObj), encKey).toString();
    sessionStorage.setItem(encKey, encSession);
}

export function $destroySession(key) {
    const encKey = isDev ? key : MD5(key).toString();
    sessionStorage.removeItem(encKey);
}
