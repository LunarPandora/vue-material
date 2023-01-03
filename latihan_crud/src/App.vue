<template>
  <div class="container mt-5">
    <div>
      <form @submit.prevent="add">
        <input type="text" class="form-control" v-model="form.id" placeholder="ID User" readonly>
        <input type="text" class="form-control" v-model="form.name" placeholder="Nama User">
        
        <button type="submit" class="btn btn-primary" v-show="!updateSubmit">Add</button>
        <button type="button" class="btn btn-success" v-show="updateSubmit" @click="update(form)">Update</button>
      </form>
    </div>

    <table border=1 class="table table-striped table-inverse table-responsive">
      <thead class="thead-inverse">
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>
            <button class="btn btn-warning" @click="edit(user)">Edit</button>
            <button class="btn btn-danger" @click="del(user)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      users : '',
      form : {
        id : "",
        name : "",
      },
      updateSubmit : false
    }
  },

  mounted(){
    this.load()
  },

  methods : {
    load(){
      axios.get('http://localhost:3000/users').then(res => {
        this.users = res.data
      }).catch((e) => {
        console.log(e)
      })
    },

    add(){
      axios.post('http://localhost:3000/users', this.form).then(() => {
        this.load()

        this.form.id = ""
        this.form.name = ""
      })
    },

    edit(user){
      this.updateSubmit = true
      this.form.id = user.id
      this.form.name = user.name
    },

    update(form){
      return axios.put('http://localhost:3000/users/' + form.id, {name: this.form.name}).then(() => {
        this.load()
        this.form.id = ''
        this.form.name = ''

        this.updateSubmit = false
      }).catch((e) => {
        console.log(e)
      })
    },

    del(user){
      return axios.delete('http://localhost:3000/users/' + user.id).then(res => {
        this.load()

        let index = this.users.indexOf(this.form.name)
        this.users.splice(index, 1)
      })
    }
  }
}
</script>
