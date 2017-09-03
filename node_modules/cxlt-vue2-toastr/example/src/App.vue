<template>
    <div class="container">
        <h1 class="title">cxlt-vue2-table demo</h1>
        <div class="columns">
            <div class="column">
                <div class="field">
                    <label class="label">Title</label>
                    <p class="control">
                        <input class="input"
                               type="text"
                               placeholder="title"
                               v-model="toastr.title">
                    </p>
                </div>
                <div class="field">
                    <label class="label">Message</label>
                    <p class="control">
                        <textarea class="textarea" v-model="toastr.message"
                                  placeholder="message"></textarea>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <label class="checkbox">
                            <input type="checkbox"
                                   checked> Close Button
                        </label>
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <label class="label">Toastr Type</label>
                    <p class="control">
                        <label class="radio">
                            <input type="radio"
                                   name="type"
                                   v-model="toastr.type"
                                   value="success"> Success
                        </label>
                        <label class="radio">
                            <input type="radio"
                                   name="type"
                                    v-model="toastr.type"
                                    value="info"> Info
                        </label>
                        <label class="radio">
                            <input type="radio"
                                   name="type"
                                    v-model="toastr.type"
                                    value="warning"> Warning
                        </label>
                        <label class="radio">
                            <input type="radio"
                                   name="type"
                                    v-model="toastr.type"
                                    value="error"> Error
                        </label>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Position</label>
                    <p class="control">
                        <label class="radio">
                            <input type="radio"
                                   name="position"
                                   v-model="toastr.position"
                                   value="top right"> Top Right
                        </label>
                        <label class="radio">
                            <input type="radio"
                                   name="position"
                                   v-model="toastr.position"
                                   value="bottom right"> Bottom Right
                        </label>
                        <label class="radio">
                            <input type="radio"
                                   name="position"
                                   v-model="toastr.position"
                                   value="bottom left"> Bottom Left
                        </label>
                        <label class="radio">
                            <input type="radio"
                                   name="position"
                                   v-model="toastr.position"
                                   value="bottom left"> Top Left
                        </label>
                        <label class="radio">
                            <input type="radio"
                                   name="position"
                                   v-model="toastr.position"
                                   value="top center"> Top Center
                        </label>
                        <label class="radio">
                            <input type="radio"
                                   name="position"
                                   v-model="toastr.position"
                                   value="bottom center"> Bottom Center
                        </label>
                        <label class="radio">
                            <input type="radio"
                                   name="position"
                                   v-model="toastr.position"
                                   value="top full width"> Top Full Width
                        </label>
                        <label class="radio">
                            <input type="radio"
                                   name="position"
                                   v-model="toastr.position"
                                   value="bottom full width"> Bottom Full Width
                        </label>
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <label class="label">Show Method</label>
                    <p class="control">
                    <span class="select">
                        <select v-model="toastr.showMethod">
                            <option>bounce</option>
                            <option>flash</option>
                            <option>rubberBand</option>
                            <option>shake</option>
                            <option>headShake</option>
                            <option>swing</option>
                            <option>tada</option>
                            <option>wobble</option>
                            <option>jello</option>
                            <option>bounceIn</option>
                            <option>bounceInDown</option>
                            <option>bounceInLeft</option>
                            <option>bounceInRight</option>
                            <option>bounceInUp</option>
                            <option>fadeIn</option>
                            <option>fadeInDown</option>
                            <option>fadeInDownBig</option>
                            <option>fadeInLeft</option>
                            <option>fadeInLeftBig</option>
                            <option>fadeInRight</option>
                            <option>fadeInRightBig</option>
                            <option>fadeInUp</option>
                            <option>fadeInUpBig</option>
                            <option>flipInX</option>
                            <option>flipInY</option>
                            <option>lightSpeedIn</option>
                            <option>rotateIn</option>
                            <option>rotateInDownLeft</option>
                            <option>rotateInDownRight</option>
                            <option>rotateInUpLeft</option>
                            <option>rotateInUpRight</option>
                            <option>hinge</option>
                            <option>rollIn</option>
                            <option>zoomIn</option>
                            <option>zoomInDown</option>
                            <option>zoomInLeft</option>
                            <option>zoomInRight</option>
                            <option>zoomInUp</option>
                            <option>slideInDown</option>
                            <option>slideInLeft</option>
                            <option>slideInRight</option>
                            <option>slideInUp</option>
                        </select>
                    </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Hide Method</label>
                    <p class="control">
                        <span class="select">
                        <select v-model="toastr.hideMethod">
                            <option>bounce</option>
                            <option>flash</option>
                            <option>rubberBand</option>
                            <option>shake</option>
                            <option>headShake</option>
                            <option>swing</option>
                            <option>tada</option>
                            <option>wobble</option>
                            <option>jello</option>
                            <option>bounceOut</option>
                            <option>bounceOutDown</option>
                            <option>bounceOutLeft</option>
                            <option>bounceOutRight</option>
                            <option>bounceOutUp</option>
                            <option>fadeOut</option>
                            <option>fadeOutDown</option>
                            <option>fadeOutDownBig</option>
                            <option>fadeOutLeft</option>
                            <option>fadeOutLeftBig</option>
                            <option>fadeOutRight</option>
                            <option>fadeOutRightBig</option>
                            <option>fadeOutUp</option>
                            <option>fadeOutUpBig</option>
                            <option>flipOutX</option>
                            <option>flipOutY</option>
                            <option>lightSpeedOut</option>
                            <option>rotateOut</option>
                            <option>rotateOutDownLeft</option>
                            <option>rotateOutDownRight</option>
                            <option>rotateOutUpLeft</option>
                            <option>rotateOutUpRight</option>
                            <option>hinge</option>
                            <option>rollOut</option>
                            <option>zoomOut</option>
                            <option>zoomOutDown</option>
                            <option>zoomOutLeft</option>
                            <option>zoomOutRight</option>
                            <option>zoomOutUp</option>
                            <option>slideOutDown</option>
                            <option>slideOutLeft</option>
                            <option>slideOutRight</option>
                            <option>slideOutUp</option>
                        </select>
                                                    </span>
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <label class="label">Time out</label>
                    <p class="control">
                        <input class="input"
                               type="text"
                               placeholder="time out"
                               v-model="toastr.timeOut">
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-grouped">
            <p class="control">
                <button class="button is-primary"
                        @click="showToastr">Show Toastr</button>
            </p>
            <p class="control">
                <button class="button is-warning"
                        @click="hideToastr">Hide Toastr</button>
            </p>
        </div>
        <cxlt-toastr :show="show"
                     :toastr="toastr"
                     @show-change="showChange"></cxlt-toastr>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            show: false,
            toastr: {
                title: 'Toastr Notification',
                message: 'Gnome & Growl type non-blocking notifications',
                type:'success',
                position: 'top right',
                showMethod:'fadeIn',
                hideMethod:'fadeOut',
                timeOut:'5000'
            }
        }
    },
    methods: {
        showToastr() {
            this.show = true
        },
        hideToastr() {
            this.show = false
        },
        showChange(show) {
            if (this.show !== show) {
                this.show = show
            }
        }
    }
}
</script>

<style src="bulma/css/bulma.css"></style>
<style>
label.radio {
    display: flex;
}

.radio+.radio {
    margin-left: 0
}
</style>
