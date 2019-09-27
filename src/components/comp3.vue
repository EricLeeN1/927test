<template>
    <div>
        <button @click="addNum">点击</button>
    </div>
</template>

<script>
    export default {
        name:'comp3',
        methods: {
            addNum(){
                this.$store.dispatch(updateNum);
            }
        },
    }
</script>

