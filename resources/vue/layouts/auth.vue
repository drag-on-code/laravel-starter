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
    <div class="grid grid-cols-6 min-h-screen overflow-auto">
        <div class="col-span-4 p-4">
            <div class="flex items-center justify-center h-full">
                <ImageCarousel />
            </div>
        </div>
        <div class="col-span-2 p-3 rounded m-1">
            <div class="flex items-right justify-end gap-2">
                <SelectorTheme />
                <SelectorLanguage />
                <RouterLink to="/" class="btn btn-primary">
                    <IconArrowLeft /> {{ $t('Back') }}
                </RouterLink>
            </div>
            <div class="flex items-center justify-center h-full">
                <RouterView />
            </div>
        </div>
    </div>
</template>
