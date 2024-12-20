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
    props: {
        noChevron: {
            type: Boolean,
            default: false,
        },
        buttonText: {
            type: Boolean,
            default: false
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
            document.documentElement.lang = payload;

        },
    }
}
</script>

<template>

    <div class="dropdown relative inline-flex [--auto-close:inside] rtl:[--placement:bottom-end]">
        <button id="language-selector" type="button" class="dropdown-toggle btn btn-circle"
            :class="buttonText ? 'btn-text' : 'btn-primary'" aria-haspopup="menu" aria-expanded="false"
            aria-label="Dropdown">
            <IconLanguage class="swap-off size-6" />
            <IconChevronDown v-if="!noChevron" class="size-4 dropdown-open:rotate-180" />
        </button>
        <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical"
            aria-labelledby="language-selector">
            <li v-for="locale in availableLocales" :key="locale">
                <div class="theme-controller btn btn-text w-full justify-start" v-html="getLocaleString(locale)"
                    @click="setLocale(locale)" />
            </li>
        </ul>
    </div>
</template>
