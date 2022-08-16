<template>
<div>
<el-select v-model="value" clearable placeholder="请选择" > 
    <el-option
      v-for="item in options.length"
      :key="item"
      :label="options[item-1]"
      :value="options[item-1]">
    </el-option>
    
  </el-select>
   <el-button type="primary" round @click="getCname" >病害查询</el-button>
  <el-select v-model="Vvalue"  clearable placeholder="请选择" v-show="value" @change="changeSelect">
    <el-option
      v-for="item in cropsVos.length"
      :key="item"
      :label="cropsVos[item-1].dname"
      :value="cropsVos[item-1].detail"
      :solve="cropsVos[item-1].solve">
    </el-option>
    
  </el-select>
  <div id="jieguo" v-show="Vvalue">
      <h1>病害细节</h1>
      <p>{{Vvalue}}</p>
      <h1>处理办法</h1>
      <p>{{solve}}</p>
  </div>
</div>
   
  
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    align-content: center;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
import axios from 'axios'
const ax=axios.create({
    baseURL:'http://119.3.182.104:8080/crop/detail/find',

})
export default {
  
  name:'chaxun',
  data(){
    return {
       options: [

       ],
      cropsVos:[

      ],
        value: '',
        Vvalue:[],
        solve:'',
        
    }
  },
  mounted(){
    ax({
      method:'POST',
      url:'http://119.3.182.104:8080/crop/detail/find'
    }).then(res=>{
      
      console.log('*.*');
      console.log(res);
     console.log(res.data.data.all[1])
     
     this._data.options=res.data.data.all
  
    })
  },
  methods:{
    changeSelect() {
          ax({
              method:'GET',
              url:`${this.value}`
          }).then(res=>{
            console.log('000');
            for(var i=0;i<res.data.data.cropsVos.length;i++){
              if(this.Vvalue==res.data.data.cropsVos[i].detail){
                this.solve=res.data.data.cropsVos[i].solve
              }
            }
        }).catch(err=>{
            console.log(err);
        })
      },
      getCname(){
          ax({
              method:'GET',
              url:`${this.value}`
          }).then(res=>{
            console.log(this);
            this.cropsVos=res.data.data.cropsVos
            
            console.log(res);
            
        }).catch(err=>{
            console.log(err);
        })
      },
      
    // getCname(){
    //     axios
        
    //         .get("http://119.3.182.104:8080/crop/detail/find",{params:{cname:this.value}})
    //         // url:`?username=${this.name}&password=${this.password}`,
    //         .then((data)=>{
    //             console.log('...');
    //             console.log(data);
    //         })
    // }
  }
}
</script>
<style scoped>
#jieguo{
    margin: 20px 0 0 0;
    /* background-color: rgb(84, 92, 100); */
}
</style>