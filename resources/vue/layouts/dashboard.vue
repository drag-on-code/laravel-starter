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
    <DashboardNavbar />
    <DashboardSidebar />

    <div class="p-10 sm:ml-64 mt-14">
        <RouterView />
    </div>
</template>
