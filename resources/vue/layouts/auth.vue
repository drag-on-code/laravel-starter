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
    <div class="grid grid-cols-5 min-h-screen overflow-auto">
        <div class="col-span-3 p-4">
        </div>
        <div class="col-span-2 p-4 rounded m-2">
            <div class="flex items-right justify-end gap-2">
                <ThemeSelector />
                <LanguageSelector />
            </div>
            <div class="flex items-center justify-center h-full">
                <RouterView />
            </div>
        </div>
    </div>
</template>
