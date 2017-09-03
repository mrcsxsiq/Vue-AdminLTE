<template>
    <div>

        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-sm-4">
                <h2>This is main title</h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="index.html">This is</a>
                    </li>
                    <li class="active">
                        <strong>Breadcrumb</strong>
                    </li>
                </ol>
            </div>
            <div class="col-sm-8">
                <div class="title-action">
                    <router-link to="/" class="btn btn-primary">This is action area</router-link>
                </div>
            </div>
        </div>

        <div class="wrapper wrapper-content">

            <div class="row">
                <div class="container">
                    <div class="col-lg-12">
                        <div class="col-lg-3">

                            <div class="form-group">
                                <label>Title</label>
                                <input class="form-control"
                                       type="text"
                                       placeholder="title"
                                       v-model="toastr.title">
                            </div>

                            <div class="form-group">
                                <label>Message</label>
                                <p class="control">
                                    <textarea class="form-control"
                                              v-model="toastr.message"
                                              placeholder="message"></textarea>
                                </p>
                            </div>

                            <div class="form-group">
                                <p class="control">
                                    <div>
                                        <label>
                                            <input type="checkbox"
                                             v-model="toastr.closeButton"> Close Button
                                        </label>
                                    </div>

                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="form-group">
                                <label>Toastr Type</label>
                                <p class="control">
                                    <div>
                                        <label>
                                            <input type="radio"
                                                   name="type"
                                                   v-model="toastr.type"
                                                   value="success"> Success
                                        </label>
                                    </div>

                                    <div>
                                        <label>
                                            <input type="radio"
                                                   name="type"
                                                   v-model="toastr.type"
                                                   value="info"> Info
                                        </label>
                                    </div>

                                    <div>
                                        <label>
                                            <input type="radio"
                                                   name="type"
                                                   v-model="toastr.type"
                                                   value="warning"> Warning
                                        </label>
                                    </div>

                                    <div>
                                        <label>
                                            <input type="radio"
                                                   name="type"
                                                   v-model="toastr.type"
                                                   value="error"> Error
                                        </label>
                                    </div>
                                </p>
                            </div>
                            <div class="field">
                                <label>Position</label>
                                <p class="control">
                                    <div>
                                        <label>
                                            <input type="radio"
                                                   name="position"
                                                   v-model="toastr.position"
                                                   value="top right"> Top Right
                                        </label>
                                    </div>

                                    <div>
                                        <label>
                                            <input type="radio"
                                                   name="position"
                                                   v-model="toastr.position"
                                                   value="bottom right"> Bottom Right
                                        </label>
                                    </div>

                                    <div>
                                    <label>
                                        <input type="radio"
                                               name="position"
                                               v-model="toastr.position"
                                               value="bottom left"> Bottom Left
                                    </label>
                                    </div>

                                    <div>
                                    <label>
                                        <input type="radio"
                                               name="position"
                                               v-model="toastr.position"
                                               value="top left"> Top Left
                                    </label>
                                    </div>

                                    <div>
                                    <label>
                                        <input type="radio"
                                               name="position"
                                               v-model="toastr.position"
                                               value="top center"> Top Center
                                    </label>
                                    </div>

                                    <div>
                                    <label>
                                        <input type="radio"
                                               name="position"
                                               v-model="toastr.position"
                                               value="bottom center"> Bottom Center
                                    </label>
                                    </div>

                                    <div>
                                    <label>
                                        <input type="radio"
                                               name="position"
                                               v-model="toastr.position"
                                               value="top full width"> Top Full Width
                                    </label>
                                    </div>

                                    <div>
                                    <label>
                                        <input type="radio"
                                               name="position"
                                               v-model="toastr.position"
                                               value="bottom full width"> Bottom Full Width
                                    </label>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="field">
                                <label>Show Method</label>
                                <p class="control">
                                    <span class="select">
                                        <select
                                         class="form-control m-b"
                                         v-model="toastr.showMethod">
                                            <optgroup label="Attention Seekers">
                                            <option>bounce</option>
                                            <option>flash</option>
                                            <option>rubberBand</option>
                                            <option>shake</option>
                                            <option>headShake</option>
                                            <option>swing</option>
                                            <option>tada</option>
                                            <option>wobble</option>
                                            <option>jello</option>
                                            </optgroup>
                                            <optgroup label="Bouncing Entrances">
                                            <option>bounceIn</option>
                                            <option>bounceInDown</option>
                                            <option>bounceInLeft</option>
                                            <option>bounceInRight</option>
                                            <option>bounceInUp</option>
                                            </optgroup>
                                          <optgroup label="Fading Entrances">
                                            <option>fadeIn</option>
                                            <option>fadeInDown</option>
                                            <option>fadeInDownBig</option>
                                            <option>fadeInLeft</option>
                                            <option>fadeInLeftBig</option>
                                            <option>fadeInRight</option>
                                            <option>fadeInRightBig</option>
                                            <option>fadeInUp</option>
                                            <option>fadeInUpBig</option>
                                          </optgroup>
                                          <optgroup label="Flippers">
                                            <option>flip</option>
                                            <option>flipInX</option>
                                            <option>flipInY</option>
                                          </optgroup>
                                          <optgroup label="Lightspeed">
                                            <option>lightSpeedIn</option>
                                          </optgroup>
                                          <optgroup label="Rotating Entrances">
                                            <option>rotateIn</option>
                                            <option>rotateInDownLeft</option>
                                            <option>rotateInDownRight</option>
                                            <option>rotateInUpLeft</option>
                                            <option>rotateInUpRight</option>
                                          </optgroup>
                                              <optgroup label="Sliding Entrances">
                                            <option>slideInDown</option>
                                            <option>slideInLeft</option>
                                            <option>slideInRight</option>
                                            <option>slideInUp</option>
                                            </optgroup>
                                            <optgroup label="Zoom Entrances">
                                            <option>zoomIn</option>
                                            <option>zoomInDown</option>
                                            <option>zoomInLeft</option>
                                            <option>zoomInRight</option>
                                            <option>zoomInUp</option>
                                            </optgroup>
                                              <optgroup label="Spectials">
                                            <option>hinge</option>
                                            <option>rollIn</option>
                                          </optgroup>
                                        </select>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <label>Hide Method</label>
                                <p class="control">
                                    <span class="select">
                                        <select
                                        class="form-control m-b"
                                        v-model="toastr.hideMethod">
                                            <optgroup label="Attention Seekers">
                                            <option>bounce</option>
                                            <option>flash</option>
                                            <option>rubberBand</option>
                                            <option>shake</option>
                                            <option>headShake</option>
                                            <option>swing</option>
                                            <option>tada</option>
                                            <option>wobble</option>
                                            <option>jello</option>
                                            </optgroup>
                                            <optgroup label="Bouncing Exists">
                                            <option>bounceOut</option>
                                            <option>bounceOutDown</option>
                                            <option>bounceOutLeft</option>
                                            <option>bounceOutRight</option>
                                            <option>bounceOutUp</option>
                                            </optgroup>
                                            <optgroup label="Fading Exists">
                                            <option>fadeOut</option>
                                            <option>fadeOutDown</option>
                                            <option>fadeOutDownBig</option>
                                            <option>fadeOutLeft</option>
                                            <option>fadeOutLeftBig</option>
                                            <option>fadeOutRight</option>
                                            <option>fadeOutRightBig</option>
                                            <option>fadeOutUp</option>
                                            <option>fadeOutUpBig</option>
                                            </optgroup>
                                            <optgroup label="Flippers">
                                            <option>flip</option>
                                            <option>flipOutX</option>
                                            <option>flipOutY</option>
                                            </optgroup>
                                            <optgroup label="Lightspeed">
                                            <option>lightSpeedOut</option>
                                            </optgroup>
                                            <optgroup label="Rotating Exists">
                                            <option>rotateOut</option>
                                            <option>rotateOutDownLeft</option>
                                            <option>rotateOutDownRight</option>
                                            <option>rotateOutUpLeft</option>
                                            <option>rotateOutUpRight</option>
                                            </optgroup>
                                        <optgroup label="Sliding Exists">
                                            <option>slideOutDown</option>
                                            <option>slideOutLeft</option>
                                            <option>slideOutRight</option>
                                            <option>slideOutUp</option>
                                        </optgroup>
                                        <optgroup label="Zoom Exists">
                                            <option>zoomOut</option>
                                            <option>zoomOutDown</option>
                                            <option>zoomOutLeft</option>
                                            <option>zoomOutRight</option>
                                            <option>zoomOutUp</option>
                                        </optgroup>
                                         <optgroup label="Specials">
                                            <option>hinge</option>
                                            <option>rollOut</option>
                                        </optgroup>
                                        </select>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="field">
                                <label>Show duration</label>
                                <p class="control">
                                    <input class="form-control"
                                           type="text"
                                           placeholder="show duration"
                                           v-model="toastr.showDuration">
                                </p>
                            </div>
                            <div class="field">
                                <label>Hide duration</label>
                                <p class="control">
                                    <input class="form-control"
                                           type="text"
                                           placeholder="hide duration"
                                           v-model="toastr.hideDuration">
                                </p>
                            </div>
                            <div class="field">
                                <label>Delay</label>
                                <p class="control">
                                    <input class="form-control"
                                           type="text"
                                           placeholder="delay"
                                           v-model="toastr.delay">
                                </p>
                            </div>
                            <div class="field">
                                <label>Time out</label>
                                <p class="control">
                                    <input class="form-control"
                                           type="text"
                                           placeholder="time out"
                                           v-model="toastr.timeOut">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <button class="btn btn-primary"
                                @click="showToastr">Show Toastr</button>

                        <button class="btn btn-warning"
                                @click="hideToastr">Hide Toastr</button>
                    </div>
                    <cxlt-toastr :show="show"
                                 :toastr="toastr"
                                 @show-change="showChange"></cxlt-toastr>
                </div>

            </div>

        </div>

    </div>
</template>

<script>

    export default {
        components: {
        },
        data() {
                return {
                    show: false,
                    toastr: {
                        title: 'Toastr Notification',
                        message: 'Gnome & Growl type non-blocking notifications',
                        closeButton: true,
                        type: 'success',
                        position: 'top right',
                        showMethod: 'fadeIn',
                        hideMethod: 'fadeOut',
                        showDuration: 1000,
                        hideDuration: 1000,
                        delay: 0,
                        timeOut: '5000'
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
