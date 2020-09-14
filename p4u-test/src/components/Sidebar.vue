<template>
    <b-sidebar id="nav" 
      shadow 
      text-variant="light"
      width="250px"
      aria-labelledby="sidebar-no-header-title" 
      aria-hidden="false"
      no-header
      visible
      no-close-on-route-change
      @change = "shiftContent"
    >
      <img src="@/assets/images/P4U-logo.png" width="100%" height="188px">

      <nav class="mb-3">
        <b-nav vertical>
          <router-link active to="/" >Home</router-link>
          <router-link to="/places" >Stelle</router-link>
          <router-link to="/events" >Events</router-link>
          <router-link to="/products" >Produkten</router-link>
        </b-nav>
      </nav>
    </b-sidebar>
</template>

<script>
export default {
    methods : {
        shiftContent (visible) {
            let app = document.getElementById('content')

            if (visible)
            {
                app.classList.add("shiftContent")
            }
            else
            {
                app.classList.remove("shiftContent")
            }
        }
    }
}
</script>
<style lang="less">
#nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #1f262d!important;
  width: 250px;
  a {
    color: #fff;
    padding: 14px 15px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    line-height: 25px;
    opacity: 0.6;
    &.router-link-exact-active {
        background-color: #27a9e3;
        color: #ffffff!important;
        opacity: 1;
    }
    &:hover
    {
        opacity: 1;
    }
  }
}
</style>