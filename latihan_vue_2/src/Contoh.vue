<!-- App.vue - Contoh -->

<script setup>
  // Import component CompBanner dari CompBanner.vue
  import CompBanner from "./components/CompBanner.vue"
  import { ref } from 'vue'

  const pesan = ref("Ini adalah sebuah pesan!")

  // Mari kita buat sebuah ref untuk menyimpan
  // nilai yang dikirimkan dari listener "respon" di CompBanner
  const pesanDariBanner = ref("Belum ada pesan dari CompBanner")
</script>

<template>
  <!-- Kita dapat langsung memasukkan nilai
  ke props seperti ini -->
  <CompBanner pesan="Ini adalah pesan!" />

  <!-- atau melalui ref yang sudah kita sediakan. -->
  <CompBanner :pesan="pesan" />

  <!-- Dalam penamaan component, kita menggunakan camelCase. -->
  <!-- Dalam penggunaan props pada component,
   kita dapat menggunakan kebab-case. -->
  <CompBanner :pesan-utama="pesan" />

  <!-- Dengan mengakses listener "respon" yang sudah kita
  tentukan di CompBanner, kita dapat mengakses
  value yang dikirimkan dari CompBanner -->
  <CompBanner @respon="(msg) => pesanDariBanner = msg" />

  <!-- Pesan dari CompBanner akan ditampilkan disini. -->
  <p>{{ pesanDariBanner }}</p>

  <!-- tag <b> bekerja dengan cara menerima value diantara
  tag nya dan mengembalikan hasil tulisan yang telah
  ditebalkan kepada user. -->
  <b>Tulisan ini ditebalkan oleh tag bold.</b>

  <!-- Konsep kerjanya sama dengan tag-tag pada HTML.
  Component pada Vue juga dapat menerima value yang
  diapit antara tag Component tersebut. -->
  <CompBanner>Value disini ditebalkan.</CompBanner>

  <!-- Jika kita mengosongkan nilai didalam, maka
  nilai yang nantinya kita masukkan kedalam Slot
  akan muncul. -->
  <CompBanner></CompBanner>

</template>
