<template>

    <div id="app" >
        <div class="wrapper">
            <div class="content-wrapper">
                <top-bar></top-bar>
                <div class="container">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <bottom-bar></bottom-bar>
    </div>

</template>

<script>

import TopBar from '../_menu/TopBar.vue'
import BottomBar from '../_menu/BottomBar.vue'

export default {
  name: 'app',
  components: {
    BottomBar,
    TopBar
  }
}

</script>
