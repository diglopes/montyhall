import Vue from 'vue'
import App from './App'

new Vue({
    // el: "#app", Ver.1
    render: h => h(App), // Ver. 2
    // render(createElement){
    //     return createElement(App) Ver.1
    // }
}).$mount("#app") // Ver. 2