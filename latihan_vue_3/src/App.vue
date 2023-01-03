<script setup>

  import { ref, computed } from 'vue'

  const nama = ref([
    "Angga", "Budi", "Josep", "Adi", "Caca", "Yudi"
  ])

  const filterNyala = ref(false)

  const filterNama = computed(() => {
    return filterNyala.value
      ? nama.value.filter((t) => {return t[0] != "A"})
      : nama.value
  })

</script>

<template>
  <p>{{ filterNama }}</p>
  <button @click="filterNyala = !filterNyala">Tampilkan nama dengan Huruf depan A</button>
</template>