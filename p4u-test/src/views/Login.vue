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
        <form class="form-horizontal m-t-20" id="loginform" action="index.html">
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
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-warning text-white" id="basic-addon2">
                    <i class="ti-pencil"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row border-top border-secondary">
            <div class="col-12">
              <div class="form-group">
                <div class="p-t-20">
                  <a href="/register" class="btn btn-info" id="to-recover" type="button">
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
export default {
  name: "app",
  data() {
    return {
      shiftContent: false,
    };
  },
};
</script>
