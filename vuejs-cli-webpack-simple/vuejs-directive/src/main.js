import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight',{
    bind(el , binding , vnodde){
        //el.style.backgroudColor = 'green';
        //el.style.backgroudColor = binding.value
       
        if(binding.modifiers['delayed']){
            setTimeout(function(){
                alert(1);
            },3000);
        }
        if(binding.arg == 'background'){
          el.style.color = binding.value
        }else{
          el.style.color = 'green'
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
