import { createApp } from 'vue';

import router from './routes';
import store from './store/index'
import App from './App';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
