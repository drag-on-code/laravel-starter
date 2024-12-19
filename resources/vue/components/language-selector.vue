<script>
export default {
    setup() {
        const storage = useResponseStore();
        const helpers = useHelperStore();
        return {
            storage,
            helpers,
        }
    },
    mounted() {
        let lang = 'id';
        if (this.storage.getStorage('locale')) {
            lang = this.storage.getStorage('locale');
            this.setLocale(lang);
        } else {
            this.setLocale(lang);
        }
    },
    computed: {
        availableLocales() {
            return this.$i18n.availableLocales;
        },
    },
    methods: {
        getLocaleString(payload) {
            return `${payload.toUpperCase()} - ${this.helpers.getLocaleName(payload)}`
        },
        setLocale(payload) {
            this.$i18n.locale = payload;
            this.storage.setStorage('locale', payload);
            console.log(this.$i18n.locale);
        },
    }
}
</script>

<template>

    <div class="dropdown relative inline-flex [--auto-close:inside] rtl:[--placement:bottom-end]">
        <button id="dropdown-default" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu"
            aria-expanded="false" aria-label="Dropdown">
            <span class="swap-off icon-[tabler--language] size-6"></span>
            <span class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
        </button>
        <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical"
            aria-labelledby="dropdown-default">
            <li v-for="locale in availableLocales" :key="locale">
                <div class="theme-controller btn btn-text w-full justify-start" v-html="getLocaleString(locale)"
                    @click="setLocale(locale)" />
            </li>
        </ul>
    </div>
</template>
