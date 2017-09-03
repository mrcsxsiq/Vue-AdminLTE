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
                <div class="text-center">
                    <h3 class="font-bold">This is page content</h3>
                    <div class="col-lg-4 col-lg-offset-4">
                        <input type="text" placeholder="placeholder"
                        class="form-control" v-model="entrada">
                    </div>
                    <br>
                    <div class="m-t col-lg-4 col-lg-offset-4">
                        <qrious size="250" level="L" :value="entrada"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueQrious from 'vue-qrious'

    export default {
        components: {
            Qrious: VueQrious
        },
        data: function() {
            return {
                entrada : "qrcode",
                panel: {
                    texto : "Panel 1"
                },
                list: [
                    { message: 'item 1' }
                ]
            }
        },
        methods : {
            addList(){
                this.list.push({ message: this.entrada})
                this.entrada = ""
            },
            removeList(index){
                this.list.splice(index, 1)
            }
        }
    }

</script>
