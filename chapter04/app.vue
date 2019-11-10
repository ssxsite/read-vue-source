<template>
    <div id="app">
        <p>{{obj.a}}</p>
        <p>{{obj2.b}}</p>
    </div>
</template>


<script>
    export default {
        name: 'App',
        data() {
            return {
                obj:{
                    a:'a1'
                },
                obj2:{
                    b:0
                },
            }
        },
        watch: {
            'testFun':{
                handler(newVal,oldVal){
                    console.log('testFun----');
                },
                immediate:true,
            }
        },
        mounted(){
            // this.obj.a = 'a2';
            setInterval(() =>{
                this.obj2.b++
            },100)
        },
        methods:{
            testFun(){
               return this.obj.a + this.obj2.b
            }
        }
    }
</script>
