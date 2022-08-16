const obj={
    install(Vue){
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        
    }
}
export default obj