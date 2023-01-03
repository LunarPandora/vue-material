<script setup>
    defineProps({
        msg: {
            type: String
        }
    })
</script>

<script>
    export default {
        data(){
            return {
                data1 : "Hello",
                count : 0,
            }
        },
        methods: {
            counting(){
                this.count = this.count + 1;
            }
        }
    }
</script>

<template>
    <h1>{{ msg }}</h1>
    <h1>{{ data1 }}</h1>
    <h3>{{ count }}</h3>
    <button @click="counting">Click</button>
</template>
