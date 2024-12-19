import axios from 'axios';
import CryptoJS from 'crypto-js';

let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Client-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    'Content-Type': 'application/json',
    'X-App-Platform': 'web',
    'X-App-Mobile': 'false'
};

const isDev = JSON.parse(import.meta.env?.VITE_APP_DEBUG ?? false) ?? false;
if (isDev && import.meta.env?.VITE_ENC_KEY && import.meta.env?.VITE_ENC_VAL) {
    headers[import.meta.env?.VITE_ENC_KEY] = import.meta.env?.VITE_ENC_VAL;
}

const $axios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: headers
});

const decrypt = (encryptedData, encKey) => {
    encryptedData = atob(encryptedData);
    const iv = encryptedData.slice(0, 16);
    const encryptedText = encryptedData.slice(16);
    const key = CryptoJS.enc.Utf8.parse(encKey);
    const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    const result = decrypted.toString(CryptoJS.enc.Utf8);
    return result;
}

const signature = (method, path, timestamp, token) => {
    const data = method?.toUpperCase() + path + timestamp;
    const hmac = CryptoJS.HmacSHA256(data, token ?? "");
    const hmacString = hmac.toString(CryptoJS.enc.Hex);

    return hmacString;
}

const handleResponse = (response) => {
    const responseStore = useResponseStore();
    const encrypted = response?.headers?.get('X-Signature');
    const requestTimestamp = parseInt(response?.config?.headers?.get('X-Timestamp'));
    const timestamp = new Date().getTime();
    const responseTime = timestamp - requestTimestamp;
    responseStore.responseTime = responseTime;
    if (encrypted) {
        const content = decrypt(response.data, encrypted);
        response.data = JSON.parse(content);
    }
    responseStore.endRequest();
    return response;
}

const setErrors = (error) => {
    const response = useResponseStore();
    if (error?.response?.data?.error) {
        if (error.response.data.error instanceof Object) {
            response.setErrors(error.response.data.error);
        } else {
            response.setErrors({ server: error.response.data.error });
        }
    } else if (error?.response?.statusText) {
        response.setErrors({ server: error?.response?.statusText });
    } else {
        response.setErrors({ server: error.message });
    };
}

const handleError = (error) => {
    const auth = useAuthStore();
    const response = useResponseStore();
    const encrypted = error?.response?.headers?.get('X-Signature');
    if (encrypted) {
        const content = decrypt(error.response.data, encrypted);
        error.response.data = JSON.parse(content);
    }
    response.endRequest();

    if (error) {
        if (error?.response?.status) {
            switch (error.response.status) {
                case 401:
                    auth.logout();
                    if (document.location.pathname != "/auths/login")
                        document.location.href = "/auths/login";
                    break;
                case 403:
                    if (error.response.statusText == "") {
                        response.setErrors({ server: error.response.data.error });
                    } else {
                        response.setErrors({ server: error.response.statusText });

                    }
                    break;
                case 406:
                    response.setErrors({ server: error.response.statusText });
                    break;
                case 503:
                    response.setErrors({ server: error.response.statusText });
                    if (document.location.pathname != "/service-not-available")
                        document.location.href = "/service-not-available";
                    // Router.replace('/service-not-available');
                    break;
                default:
                    setErrors(error);
                    break;
            }
        } else {
            response.setErrors({ server: error.message });
        }
        return Promise.reject(error.response);
    }
}


//Intercept Request
$axios.interceptors.request.use(config => {
    const auth = useAuthStore();
    const timestamp = new Date().getTime();
    const response = useResponseStore();
    response.startRequest();
    if (auth.token) config.headers['X-Authorization'] = 'Bearer ' + auth.token;
    if (auth.company?.id) config.headers['X-Company'] = auth.company?.id;
    if (auth.branch?.id) config.headers['X-Branch'] = auth.branch?.id;

    config.url = import.meta.env.VITE_API_ENDPOINT + config.url;
    //add signature
    const method = config.method;
    const path = config.url;
    config.headers['X-Signature'] = signature(method, path, timestamp, auth?.token);
    config.headers['X-Timestamp'] = timestamp;
    return config;
});

//Intercept Response
$axios.interceptors.response.use(handleResponse, handleError);
export default $axios;
