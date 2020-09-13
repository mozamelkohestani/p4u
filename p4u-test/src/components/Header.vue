<template>
  <header class="header">
    <b-button
      v-b-toggle.nav
      aria-expanded="true"
      class="sidemenu__btn"
    >
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bottom"></span>
    </b-button>

    <a href="/login" alt="user" class="user">
        <img src="@/assets/images/user.jpg">
    </a>
  </header>
</template>

<style lang="less">
.header {
    background-color: #141619;
    height: 64px;
    position: relative;
    .sidemenu__btn {
        height: 100%;
        width: 54px;
        background-color: transparent;
        border: none;
        border-radius: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        float: left;
    }
    .user {
        width: 54px;
        float: right;
        padding: 0px 15px;
        font-size: 0.875rem;
        line-height: 64px;
        height: 64px;
        img {
            border-radius: 50%;
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