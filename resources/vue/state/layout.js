export const useLayoutStore = defineStore('layout', {
    state: () => ({
        layout: 'public',
        appName: import.meta.env.VITE_APP_NAME ?? 'App Dashboard',
    }),

    actions: {
        setLayout(layout) {
            this.layout = layout
        }
    }
});


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
}
