<!-- CompBanner.vue -->

<script setup>
    /* eslint-disable */

    // Gunakan defineProps() untuk menyatakan props
    // yang dapat diterima oleh Component ini.

    const props = defineProps({
        pesan: {
            type: String, // Tipe data, bisa lebih dari 1 (Disimpan dalam bentuk array.)
        //     required: true, // Apakah wajib diisi / tidak?,
        //     default: "Tidak ada pesan.", // Nilai default jika props tidak terisi
        //     validator: function(val){
        //         // Sebuah function khusus dan custom untuk memvalidasi data.
        //         // Contoh : hanya menerima pesan yang terkandung pada array dibawah.

        //         return ['Bukan pesan', 'Perhatian', 'Bahaya'].includes(val)
        //     }
        },

        // Dalam penamaan props,
        // Kita menggunakan format camelCase.
        pesanUtama : {
            type: String
        }
    })

    // Gunakan defineEmits() untuk mendaftarkan nama listener
    // yang dapat digunakan oleh component lainnya
    // untuk menerima data dan perubahan dari component ini.
    const emit = defineEmits(['respon'])

    // Kita dapat mengirimkan nilai ke listener
    // yang telah kita daftarkan.
    emit('respon', "Ini adalah pesan dari component CompBanner")
</script>

<template>
    <p class="bold_text">
        <!-- Value diantara tag <slot> akan menjadi fallback
        atau nilai default jika component child tidak diberikan
        value fragmen template. -->
        <slot>Tidak ada teks!</slot>
    </p>
</template>

<!-- Dengan <style>, kita dapat menghias component kita
seperti element-element di HTML dengan CSS. -->
<style>
    .bold_text{
        font-weight: bold;
    }
</style>