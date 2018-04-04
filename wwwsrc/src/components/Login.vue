<template>
  <div class="login">
    <form v-if="showLogin == true" @submit.prevent="login()" class="form-group">
      <h1>LOGIN</h1>
      <input type="text" v-model="user.email" placeholder="Email" class="form-control">
      <input type="password" v-model="user.password" placeholder="Password" class="form-control">
      <button type="submit" class="btn submit">Submit</button>
    </form>

    <form v-if="showLogin == false" @submit.prevent="createUser()" class="form-group">
      <h1>CREATE ACCOUNT</h1>
      <input type="text" v-model="newUser.name" placeholder="Username" class="form-control">
      <input type="text" v-model="newUser.email" placeholder="Email" class="form-control">
      <input type="password" v-model="newUser.password" placeholder="Password" class="form-control">
      <input type="password" v-model="newUser.confirmPassword" placeholder="Confirm Password" class="form-control">
      <button type="submit" @click="showLogin = true" class="btn submit">Submit</button>
    </form>

    <div class="d-flex justify-content-center">
      <div class="bg-1">
        <button @click="showLogin = false" class="btn btn-link">Create User</button>
        <button @click="showLogin = true" class="btn btn-link">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        showLogin: true,
        user: {
          email: '',
          password: ''
        },
        newUser: {
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      login() {
        this.$store.dispatch('login', this.user)
        this.resetFields()        
      },
      createUser() {
        if (this.newUser.password !== this.newUser.confirmPassword) {
          this.resetFields()
          alert("Passwords do not match!")
          return
        }
        this.$store.dispatch('createUser', this.newUser)
        this.resetFields()
      },
      resetFields() {
        Object.assign(this.$data, this.$options.data.call(this));
      }
    }
  }
</script>


<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-color: rgb(170, 221, 255);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }

  .form-control {
    width: 50%;
    margin: 5px
  }

  .bg-1 {
    background-color: rgba(170, 168, 168, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 70%;
    border-radius: 30px
  }

  .btn-link {
    color: indigo;
    font-weight: 700
  }

  .submit {
    width: 20%;
    background-color: indigo;
    font-weight: 600;
    color: ivory
  }
</style>