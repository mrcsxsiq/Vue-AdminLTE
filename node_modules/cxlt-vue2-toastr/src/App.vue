<template>
    <div>
        <cxlt-toastr :show="show"
                     :toastr="toastr"
                     @show-change="showChange"></cxlt-toastr>
        <button @click="switchShow">click me</button>
    </div>
</template>

<script>

export default {
    name: 'App',
    data: () => {
        return {
            show: false,
            toastr: {
                // title: '成功提示',
                // message: '保存角色成功',
                // position: 'top left'
                title: '',
                closeButton: true,
                timeOut: 5000,
                showDuration: 5000,
                delay: 3000
            }
        }
    },
    methods: {
        switchShow() {
            this.show = !this.show
            // this.toastr = {
            //     title: '提示',
            //     message: '保存角色成功'
            // }
            this.toastr.title = '提示'
            this.toastr.message = '保存角色成功'
        },
        showChange(show) {
            if (this.show !== show) {
                this.show = show
            }
        }
    }
}

</script>

