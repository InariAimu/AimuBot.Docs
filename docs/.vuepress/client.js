import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import NekoBox from './components/NekoBox.vue'

export default defineClientConfig({
    async enhance({ app, router, siteData }) {
        app.config.procdutionTip = false,
            app.component('font-awesome-icon', FontAwesomeIcon);
        app.component('neko-box', NekoBox);

        if (!__VUEPRESS_SSR__) {
            // none ssr contents
        }
    },
    setup() {
    },
    rootComponents: [],
});
