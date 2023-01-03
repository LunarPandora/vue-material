<script setup>

    /* eslint-disable */

    const emit = defineEmits(['toggleInput'])

    const props = defineProps({
        menu: {
            type: Array,
            required: true,
            default: [{}]
        }
    })

    function edit_data(no, menu){
        emit('toggleInput', {no, menu})
    }

    function hapus_data(no){
        for(let i = 0; i < props.menu.length; i++){
            if(props.menu[i].no == no){
                props.menu.splice(i, 1)
            }
        }
    }
</script>

<template>
    <table class="table" cellspacing=0>
        <thead>
            <tr>
                <th width="5%">No</th>
                <th>Menu</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody v-if="menu.length > 0">
            <tr v-for="data in menu" :key="data">
                <td>{{ data.no }}</td>
                <td>{{ data.menu }}</td>
                <td>
                    <button id="edit" @click="edit_data( data.no, data.menu )">Edit</button>
                    <button id="delete" @click="hapus_data( data.no )">Hapus</button>
                </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan=3>Tidak ada pesanan!</td>
            </tr>
        </tbody>
    </table>
</template>

<style>
    #app{
        font-family: "Roboto", sans-serif;
    }

    .table{
        margin-top: 20px;
        width: 80%;
        background-color: #444;
        color: white;
    }

    .table thead tr th{
        padding: 10px 0;
    }

    .table tbody tr td{
        color: black;
        padding: 10px 0;
        text-align: center;
    }

    .table tbody tr:nth-of-type(odd){
        background-color: #EFEFEF;
    }

    .table tbody tr:nth-of-type(even){
        background-color: #FAFAFA;
    }

    button{
        color: white;
        border: 0;
        border-radius: 4px;
        padding: 8px 14px;
        font-size: 17px;
        margin-right: 4px;
    }

    button#edit{
        background-color: #e6a82c;
    }

    button#delete{
        background-color: #b51d1d;
    }
</style>