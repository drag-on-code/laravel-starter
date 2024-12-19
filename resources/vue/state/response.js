import { $getStorage, $setStorage, $getSession, $setSession } from '~/helpers/storage'
import { debounce } from 'lodash';

export const useResponseStore = defineStore('response', {
    state: () => ({
        responses: null,
        errors: null,
        responseTime: null,
        hasResponse: true,
        setLoading: true,
    }),

    actions: {
        startRequest() {
            if (this.setLoading)
                this.hasResponse = false;
        },
        endRequest() {
            this.hasResponse = true;
            this.setLoading = true;
        },
        setErrors: debounce(function (value) {
            this.errors = value;
        }, 500),
        clearErrors() {
            this.errors = null;
        },
        setResponse(payload) {
            this.responses = payload;
        },
        noBlocking() {
            this.setLoading = false;
        },
        setStorage(key, value) {
            $setStorage(key, value);
        },
        setSession(key, value) {
            $setSession(key, value);
        },
        getStorage(key) {
            return $getStorage(key);
        },
        getSession(key) {
            return $getSession(key);
        },
    },
    getters: {
        hasError(state) {
            return state.errors ? true : false;
        },
        error(state) {
            return state.errors;
        },
        htmlError(state) {
            let text = '<p>';
            for (const props in state.errors) {
                let line = state.errors[props] + '<br/>'
                text = text + line;
            };
            return text + '</p>';
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useResponseStore, import.meta.hot))
}
