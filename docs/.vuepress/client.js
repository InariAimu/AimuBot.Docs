import { defineClientConfig } from '@vuepress/client'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import NekoBox from './components/NekoBox.vue'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.config.procdutionTip = false,
        app.component('font-awesome-icon', FontAwesomeIcon);
        app.component('neko-box', NekoBox);
    },
    setup() { },
    rootComponents: [],
});
