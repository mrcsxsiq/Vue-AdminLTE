<template>
    <transition :enter-active-class="enterActiveClass"
                :leave-active-class="leaveActiveClass"
                @before-enter="beforeEnter"
                @before-leave="beforeLeave">
        <div v-if="innerShow"
             id="toast-container"
             :class="['toast-'+positionClass]"
             aria-live="polite"
             role="alert">
            <div class="toast"
                 :class="['toast-'+innerToastr.type]">
                <button class="toast-close-button"
                        role="button"
                        @click="hideToastr"
                        v-if="innerToastr.closeButton">×</button>
                <div class="toast-title">{{innerToastr.title}}</div>
                <div class="toast-message">{{innerToastr.message}}</div>
            </div>
        </div>
    </transition>
</template>


<script>
export default {
    name: 'CxltToastr',
    data: () => {
        return {
            innerShow: false,
            innerToastr: {}
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        toastr: {
            type: Object,
            required: true,
            default: {}
        }
    },
    created() {
        this.innerShow = this.show
        this.innerToastr = Object.assign({
            type: 'success',
            position: 'top center',
            closeButton: true,
            timeOut: 5000,
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut',
            showDuration: null,
            hideDuration: null,
            delay: 0
        }, this.$cxltToastrOptions, this.toastr)
    },
    computed: {
        positionClass() {
            return this.innerToastr.position.split(' ').join('-')
        },
        enterActiveClass() {
            return 'animated ' + this.innerToastr.showMethod
        },
        leaveActiveClass() {
            return 'animated ' + this.innerToastr.hideMethod
        }
    },
    methods: {
        showToastr() {
            this.innerShow = true
        },
        hideToastr() {
            this.innerShow = false
        },
        beforeEnter(el) {
            if (this.innerToastr.showDuration) {
                el.style.animationDuration = this.innerToastr.showDuration + 'ms'
            }
            // if (this.innerToastr.delay) {
            //     el.style.animationDelay = this.innerToastr.delay + 'ms'
            // }
        },
        beforeLeave(el) {
            if (this.innerToastr.hideDuration) {
                el.style.animationDuration = this.innerToastr.hideDuration + 'ms'
            }
        }
    },
    sto: null,
    watch: {
        show(newVal) {
            if (newVal) {
                setTimeout(() => this.showToastr(), this.innerToastr.delay)
            } else {
                this.hideToastr()
            }
        },
        innerShow(newVal) {
            if (newVal) {
                if (this.sto) {
                    clearTimeout(this.sto)
                }
                this.sto = setTimeout(this.hideToastr, this.innerToastr.timeOut)
            }
            this.$emit('show-change', newVal)
        },
        toastr: {
            handler: function (newVal) {
                this.innerToastr = Object.assign(this.innerToastr, newVal)
            },
            deep: true
        }
    }
}

</script>

<style src="toastr/build/toastr.css"></style>
<style src="animate.css/animate.css"></style>
