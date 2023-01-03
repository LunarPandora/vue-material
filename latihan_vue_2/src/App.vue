<script setup>
    import MenuBar from './components/MenuBar.vue'
    import { ref } from 'vue'

    const menu = ref([])

    const no_meja = ref('')
    const pesanan = ref('')

    const disableInput = ref(false)

    function tambah_pesan(){
        menu.value.push({
            no : no_meja.value,
            menu : pesanan.value,
        })

        no_meja.value = ''
        pesanan.value = ''
    }

    function edit_pesan(val){
        disableInput.value = true

        no_meja.value = val.no
        pesanan.value = val.menu
    }

    function update_pesan(){
        for(let i = 0; i < menu.value.length; i++){
            if(menu.value[i].no == no_meja.value){
                menu.value[i].menu = pesanan.value
            }
        }

        disableInput.value = false
        no_meja.value = ''
        pesanan.value = ''
    }

    function reset_form(){
        disableInput.value = false

        no_meja.value = ''
        pesanan.value = ''
    }
</script>

<template>
    <div class="form">
        <input type="text" placeholder="No Pesanan" v-model="no_meja" :disabled="disableInput"><br>
        <input type="text" placeholder="Pesanan" v-model="pesanan"><br>

        <button @click="tambah_pesan" v-if="!disableInput">Tambah</button>
        <button @click="update_pesan" v-if="disableInput">Update</button>

        <button id="reset" @click="reset_form">Reset</button>
    </div>

    <MenuBar :menu="menu" @toggle-input="(val) => edit_pesan(val)" />
    
</template>

<style>
    .form{
        width: 20%;
        padding: 15px 10px;
        background-color: white;
        box-shadow: 0 5px 5px #999;
    }

    .form input{
        padding: 5px 7px;
        margin-bottom: 4px;
        font-size: 16px;
    }

    .form button{
        background-color: #0197ca;
        color: white;
        border: 0;
        border-radius: 4px;
        padding: 8px 14px;
        font-size: 17px;
        margin-right: 4px;
    }

    .form button#reset{
        background-color: #32a852;
    }
</style>