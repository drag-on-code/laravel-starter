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
    },
    methods: {
        isActive(payload) {
            return this.$route.path.includes(payload);
        }
    }
};
</script>

<template>
    <div>
        <RouterView />
    </div>
</template>

<style scoped>
.splash-screen {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
}

.splash-image-animation {
    max-width: 60%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
</style>
