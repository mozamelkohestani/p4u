<template>
  <div class="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
    <div class="auth-box bg-dark border-top border-secondary">
      <div id="loginform">
        <div class="text-center p-t-20 p-b-20">
          <span class="db">
            <img src="@/assets/images/P4U-logo.png" alt="logo" class="logo" />
          </span>
        </div>
        <!-- Form -->
        <form class="form-horizontal m-t-20" id="loginform" @submit.prevent="handleSubmit">
          <div class="row p-b-30">
            <div class="col-12">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-success text-white" id="basic-addon1">
                    <i class="ti-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  required
                  v-model="username"
                  name="username"
                  :class="{ 'is-invalid': submitted && !username }"
                />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-warning text-white" id="basic-addon2">
                    <i class="ti-pencil"></i>
                  </span>
                </div>
                <input
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  required
                  v-model="password"
                  name="password"
                  :class="{ 'is-invalid': submitted && !password }"
                />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
              </div>
            </div>
          </div>
          <div class="row border-top border-secondary">
            <div class="col-12">
              <div class="form-group">
                <div class="p-t-20">
                  <a href="/signup" class="btn btn-info" id="to-recover" type="button">
                    <i class="fa fa-lock m-r-5"></i> Register
                  </a>
                  <button class="btn btn-success float-right" type="submit">Login</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.auth-wrapper .auth-box {
  background: #fff;
  padding: 20px;
  max-width: 400px;
  width: 90%;
  margin: 10% 0;
}
.logo {
  width: 200px;
  height: 150px;
}
.p-b-20 {
  padding-bottom: 20px;
}
.m-t-20 {
  margin-top: 20px;
}
.p-b-30 {
  padding-bottom: 30px;
}
.p-t-20 {
  padding-top: 20px;
}
</style>
<script>

import { login } from '../manager/networkManager'

export default {
  name: "app",
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const result = await login( this.username, this.password)
        console.log(result);
        localStorage.setItem('token' , result.data.access_token);
        this.$router.push('/');
      } catch (e) {
        alert('login or password is wrong')
        console.log(e);
      }
    },
    check () {
      const loggedIn = localStorage.getItem('token');
      if (loggedIn) {
        this.$router.push('/');
      }
    }
  },
  mounted () {
    this.check()
  }
};
</script>
