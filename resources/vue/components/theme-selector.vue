<script>
import themes from '#/themes.json';
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
        let theme = 'light';
        if (this.storage.getStorage('defaut-theme')) {
            theme = this.storage.getStorage('defaut-theme');
            this.setTheme(theme);
        } else {
            this.setTheme(theme);
        }
    },
    methods: {
        getAvailableThemes() {
            return themes.map((theme) => {
                if (theme instanceof Object) {
                    return Object.keys(theme)[0];
                }
                return theme;
            });
        },
        getThemeString(payload) {
            return `${this.helpers.headline(payload)}`
        },
        setTheme(payload) {
            this.storage.setStorage('defaut-theme', payload);
            localStorage.setItem('theme', payload);
        },
    },
}
</script>

<template>
    <div class="dropdown relative inline-flex [--auto-close:inside] rtl:[--placement:bottom-end]">
        <button id="theme-selector" type="button" class="dropdown-toggle btn btn-circle"
            :class="buttonText ? 'btn-text' : 'btn-primary'" aria-haspopup="menu" aria-expanded="false"
            aria-label="Dropdown">
            <IconColorFilter class="swap-off size-6" />
            <IconChevronDown v-if="!noChevron" class="size-4 dropdown-open:rotate-180" />
        </button>
        <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical"
            aria-labelledby="theme-selector">
            <li v-for="theme in getAvailableThemes()" :key="theme">
                <input type="radio" name="theme-dropdown"
                    class="capitalize theme-controller btn btn-text w-full justify-start" @click="setTheme(theme)"
                    :aria-label="getThemeString(theme)" :value="theme" />
            </li>
        </ul>
    </div>
</template>
