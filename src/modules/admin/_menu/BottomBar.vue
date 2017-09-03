<template>
<!--
    <div class="footer fixed">
        <div class="pull-right">
            <i class="fa fa-code"></i> with <i class="fa fa-heart"></i> by <a href="javascript:;"><strong>Company</strong></a>
        </div>
        <div>
            <strong>Copyright</strong> Company &copy; 2014-{{current_year}}
        </div>
    </div>
-->

    <footer class="main-footer">
      <div class="pull-right hidden-xs">
        <i class="fa fa-code"></i> with <i class="fa fa-heart"></i> by <a href="javascript:;"><strong>Company</strong></a>
      </div>
      <strong>Copyright</strong> Company &copy; 2014-{{current_year}}
    </footer>

</template>

<script>

    let year = new Date().getFullYear();

    export default {
        data() {
            return {
                current_year : year
            }
        }
    }
</script>
