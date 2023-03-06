import { createApp } from 'vue';

import router from './routes';
import store from './store/index'
import App from './App';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseBadge from '@/components/ui/BaseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard)
app.component('base-btn', BaseButton)
app.component('base-badge', BaseBadge)

app.mount('#app');
