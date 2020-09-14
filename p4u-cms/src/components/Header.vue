<template>
  <header class="header">
    <img src="@/assets/images/P4U-logo.png" width="100px" height="75px" class="logo">

    <div class="dropdown">
      <b-dropdown id="dropdown-user" variant="link" toggle-class="text-decoration-none" no-caret >
        <template v-slot:button-content>
          <a
            href="javascript:void(0)"
            alt="user"
            class="user nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic"
            data-toggle="dropdown-user"
            aria-haspopup="true"
            aria-expanded="false"
            no-caret
          >
            <img src="@/assets/images/user.jpg" />
          </a>
        </template>
        <b-dropdown-item @click="logout">
          <i class="fa fa-power-off m-r-5 m-l-5"></i> Logout
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  methods : {
    logout () {
      localStorage.removeItem('token')
      this.$router.push("/login");
    }
  }
}
</script>

<style lang="less">
.header {
  background-color: #141619;
  height: 64px;
  position: relative;
  .logo {
    float: left;
    width: 100px;
    height: 75px;
  }
  #dropdown-user {
    width: 54px;
    float: right;
    padding: 0px;
    font-size: 0.875rem;
    line-height: 64px;
    height: 64px;
    img {
      border-radius: 50%;
    }
    a {
      padding: 0;
      &:after {
        display: none;
      }
    }
  }
}
.sidemenu {
  &__btn {
    display: block;
    width: 50px;
    height: 50px;
    background: grey;
    border: none;
    position: relative;
    z-index: 100;
    appearance: none;
    cursor: pointer;
    outline: none;

    span {
      display: block;
      width: 20px;
      height: 2px;
      margin: auto;
      background: white;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: all 0.4s ease;

      &.top {
        transform: translateY(-8px);
      }

      &.bottom {
        transform: translateY(8px);
      }
    }
    &.not-collapsed {
      .top {
        transform: rotate(-45deg);
      }
      .mid {
        transform: translateX(-20px) rotate(360deg);
        opacity: 0;
      }
      .bottom {
        transform: rotate(45deg);
      }
    }
  }
}
</style>