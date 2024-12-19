// src/plugins/global-icons.js
import * as TablerIcons from '@tabler/icons-vue';

export default {
    install(app) {
        // Register all components from @tabler/icons-vue
        for (const [name, component] of Object.entries(TablerIcons)) {
            app.component(name, component);
        }
    }
};
