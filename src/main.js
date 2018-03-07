import Vue from 'vue'
import App from './App.vue'
import Listmachines from './MachinesList.vue'
import Map from './MachinesMap.vue'
// vue.component('onMachinesListClick', Listmachines)
// vue.component('onMapClick', Map)

Vue.component('Machine', {
    template: '<li :class="{ active: machine.on }">{{machine.name}}<toggle-button :value="machine.on" @change="machine.on = !machine.on"/></li>',
    props: ['machine']
})

new Vue({
  el: '#app',
  render: h => h(App)
})
