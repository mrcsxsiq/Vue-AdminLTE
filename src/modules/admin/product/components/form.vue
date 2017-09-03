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
                <div class="middle-box text-center animated fadeInUp">
                    <h3 class="font-bold">This is page content</h3>
                    <div class="error-desc">
                        You can create here any grid layout you want. And any variation layout you imagine:) Check out
                        main dashboard and other site. It use many different layout.
                        <br/><router-link to="/" class="btn btn-primary m-t">Dashboard</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                entrada : "marcos",
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
