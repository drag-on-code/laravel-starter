<script>
import themes from '#/themes.json';
export default {
    methods: {
        getAvailableThemes() {
            return themes.map((theme) => {
                if (theme instanceof Object) {
                    return Object.keys(theme)[0];
                }
                return theme;
            });
        },
    },
}
</script>

<template>

    <div class="dropdown relative inline-flex [--auto-close:inside] rtl:[--placement:bottom-end]">
        <button id="dropdown-default" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu"
            aria-expanded="false" aria-label="Dropdown">
            <span class="swap-off icon-[tabler--color-filter] size-6"></span>
            <span class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
        </button>
        <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical"
            aria-labelledby="dropdown-default">
            <li v-for="theme in getAvailableThemes()" :key="theme">
                <input type="radio" name="theme-dropdown"
                    class="capitalize theme-controller btn btn-text w-full justify-start" :aria-label="theme"
                    :value="theme" />
            </li>
        </ul>
    </div>
</template>
