<script>
export default {
    setup() {
        // const auth = useAuthStore();
        // const layout = useLayoutStore();
        // const config = useConfigurationStore();
        // return { auth, layout, config };
    },
    computed: {
        // ...mapGetters(useAuthStore, ['hasSession']),
        // ...mapGetters(useResponseStore, ['htmlError', 'errors']),
        year() {
            return new Date().getFullYear();
        }
    }
};
</script>

<template>
    <RouterView />
</template>
