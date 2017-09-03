<template>
    <div>
        <div class="wrapper wrapper-content">

            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox">
                        <div class="ibox-title">
                    <h5>Bootstrap Panels <small>Custom background colors.</small></h5>
                    </div>
                        <div class="ibox-content">
                            <div class="row">

                                <div v-for="module in modules" class="col-md-3" >
                                    <div class="ibox">
                                        <router-link :to="module.path">
                                            <div class="ibox-content product-box">
                                                <div class="product-imitation-2">
                                                    <img alt="image" class="img-circle" height="90" width="90" :src="module.icon" />
                                                </div>
                                                <div class="product-desc">
                                                    <p class="product-name">{{module.title}}</p>
                                                    <div class="small m-t-xs">
                                                        {{module.description}}
                                                    </div>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { modules }  from '../../../../configs/modules-config.js';

    export default {
        data() {
            return {
                modules
            }
        }
    }

</script>
