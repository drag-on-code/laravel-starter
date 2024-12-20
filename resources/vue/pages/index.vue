<script>
export default {
    setup() {
        const store = useLayoutStore();
        store.setLayout('public');
    },
};
</script>

<template>
    <div class="relative h-96 max-md:h-[31.25rem]">
        <PublicNavbar />
        <ImageCarousel />
        <PublicFooter />
    </div>
</template>
