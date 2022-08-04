import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.css';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonAlert,
  IonList,
  IonItem,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonRippleEffect,
  IonFooter,
  IonSegment,
  IonSegmentButton,
} from "@ionic/vue";
import ComponentBase from "./components/ComponentBase.vue";
import ItemRipple from "./components/ItemRipple.vue";

const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.component('ion-page', IonPage);
app.component('ion-header', IonHeader)
app.component('ion-toolbar', IonToolbar)
app.component('ion-list', IonList)
app.component('ion-button', IonButton)
app.component('ion-item', IonItem)
app.component('ion-input', IonInput)
app.component('ion-content', IonContent)
app.component('ion-alert', IonAlert)
app.component('ion-title', IonTitle)
app.component('ion-buttons', IonButtons)
app.component('ion-back-button', IonBackButton)
app.component('ion-icon', IonIcon)
app.component('ion-ripple-effect', IonRippleEffect)
app.component('ComponentBase', ComponentBase)
app.component('ItemRipple', ItemRipple)
app.component('ion-footer', IonFooter)
app.component('ion-segment', IonSegment)
app.component('ion-segment-button', IonSegmentButton)


router.isReady().then(() => {
  app.mount('#app');
});