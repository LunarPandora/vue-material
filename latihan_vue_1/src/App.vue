<script setup>
  // // Import watch dari Vue
  // import { ref, watch } from 'vue'

  // // Kita akan membuat sebuah game sederhana
  // // Pertama, kita akan menentukan sebuah angka yang akan ditebak
  // // Kedua, kita akan membuat sebuah variabel untuk menampung
  // // angka tebakan pemain.
  // const angka_target = ref(20)
  // const angka_tebakan = ref('')

  // // Bergantung pada angka tebakan pengguna,
  // // teks pada result akan berubah.
  // const result = ref("Input angka mu di kolom diatas!")

  // // Dengan watch, kita akan "mendengarkan"
  // // setiap perubahan data pada "angka_tebakan"
  // // yang akan berubah setiap kali pemain mengubah angka tebakannya.
  // watch(angka_tebakan, async (input) => {

  //   // Jika angka tebakan benar
  //   if(input == angka_target.value){
  //     result.value = "Yep, jawaban mu benar!"
  //   }
  //   // Jika angka tebakan salah
  //   else{
  //     result.value = "Ups, coba lagi!"
  //   }
  // })

  import { ref, watch } from 'vue'

  const com = ref('');
  const player = ref('')

  let turn = 1
  const result = ref('The result will show here!')
  const history = ref([])

  watch(player, async (a) => {
    if(a != ''){
      let b = com.value

      // Rock == 1  
      // Paper == 2
      // Scissors == 3

      if(a == b){
        result.value = "Draw!"
        history.value.push({
          turn : turn++,
          result : "Draw"
        })
      }
      else if(a == 1 && b == 3 || a == 2 && b == 1 || a == 3 && b == 2){
        result.value = "You won!"
        history.value.push({
          turn : turn++,
          result : "You win"
        })
      }
      else{
        result.value = "You lose!"
        history.value.push({
          turn : turn++,
          result : "Computer win"
        })
      }
    }
    
    player.value = ''
    com.value = ''
  })
  
  function pick(x){
    com.value = Math.floor(Math.random() * 3) + 1
    player.value = x

    console.log(com.value, player.value)
  }

</script>

<template>
  <div>
    <p>Let's play Rock-Paper-Scissors with Computer!</p>
    <p>Choose your pick : </p>
    <div style="display: flex;">
      <button @click="pick(1)">Rock</button>
      <button @click="pick(2)">Paper</button>
      <button @click="pick(3)">Scissors</button>
    </div>
    <p>{{ result }}</p>

    <p style="margin-top: 20px">History :</p>
    <table border=1>
      <thead>
        <tr>
          <th>Turn</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in history" :key="record.turn">
          <td>{{ record.turn }}</td>
          <td>{{ record.result }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

