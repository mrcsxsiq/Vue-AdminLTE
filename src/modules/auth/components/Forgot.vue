<template>

    <div class="register-box">
      <div class="register-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
      </div>

      <div class="register-box-body">
        <p class="login-box-msg">Forgot password</p>

        <form action="../../index.html" method="post">
          <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="Email">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="row">
            <!-- /.col -->
            <div class="col-xs-12">
              <router-link to="/login" class="btn btn-primary btn-block btn-flat">Submit</router-link>
            </div>
            <!-- /.col -->
          </div>
        </form>
        </br>
        <router-link to="/login" class="text-center">I already have a membership</router-link>
      </div>
      <!-- /.form-box -->
    </div>
    <!-- /.register-box -->

</template>

<script>

    module.exports = {
        mounted: function() {
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
            });
        }
    };
</script>
