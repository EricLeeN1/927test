<template>
    <div>
        <h3>111</h3>
        <button @click="addNum">点击</button>
        <p>{{number}}</p>
        
    </div>
</template>

<script>
    export default {
        name:'comp2',
        data(){
            return{

            }
        },
        computed:{
            number(){
                return this.$store.state.number;
            }
        },
        methods: {
            addNum(){
                this.$store.dispatch(updateNum);
            }
        },
    }
</script>

