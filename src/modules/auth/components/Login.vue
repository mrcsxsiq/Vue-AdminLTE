<template>

<div>

  <div class="login-box">
    <div class="login-logo">
      <a href="../../index2.html"><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <div>
        <div class="form-group has-feedback">
          <input
              type="text"
              class="form-control"
              placeholder="Usuário"
              required=""
              v-model="user.username">

          <span class="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input
              type="password"
              class="form-control"
              placeholder="Senha"
              required=""
              v-model="user.password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button
                type="submit"
                class="btn btn-primary btn-block btn-flat"
                @click="doLogin()">
                Sign In
            </button>
          </div>
        </div>
      </div>
      </br>
      <router-link to="/forgot">
        I forgot my password
      </router-link>
      <br>
      <router-link to="/register"class="text-center">
        Register a new membership
      </router-link>

    </div>
    <!-- /.login-box-body -->
  </div>

</div>

</template>

<script>

    import { mapActions } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        name : 'Login',
        data () {
            return {
                checked: false,
                user: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            ...mapActions(['attemptLogin'],['attemptLogout']),
            doLogin(){
                const user = this.user
                this.attemptLogin({ ...user})
                    .then(() => {
                        this.$router.push("/admin")
                    })
            }
        },
        mounted: function() {
            this.$store.dispatch('attemptLogout')
        }
    }


</script>
