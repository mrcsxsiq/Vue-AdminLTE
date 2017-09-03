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
                    <router-link to="/" class="btn btn-success" exact>
                        This is action area
                    </router-link>
                </div>
            </div>
        </div>

        <div class="wrapper wrapper-content">

            <div class="row">

                <div class="col-md-8  col-sm-offset-2  m-b-lg float-e-margins">
                    <div class="input-group" >
                        <input type="text" placeholder="Search issue by name..." class="form-control" >
                        <span class="input-group-btn">
                            <button type="button" class="btn btn-primary">
                                <i class="fa fa-search"></i> Pesquisar
                            </button>
                        </span>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-lg-3" v-for="customer in customers">
                    <div class="contact-box center-version">

                        <a href="javascript:;">

                            <img alt="image" class="img-circle" :src="customer.picture.large">

                            <h3 class="m-b-xs">
                                <strong>{{customer.name.first}} {{customer.name.last}}</strong>
                            </h3>

                            <div>
                                <small>{{customer.email}}</small>
                            </div>
                            <address class="m-t-md">
                                {{customer.location.street}}<br>
                                {{customer.location.city}}, {{customer.location.state}} {{customer.location.postcode}}<br>
                                <abbr title="Phone">P:</abbr>{{customer.phone}}
                            </address>
                            <br>
                            <div>
                                <i class="fa fa-star fa-lg text-warning"></i>
                                <i class="fa fa-star fa-lg text-warning"></i>
                                <i class="fa fa-star-half-o fa-lg text-warning"></i>
                                <i class="fa fa-star-o fa-lg text-warning"></i>
                                <i class="fa fa-star-o fa-lg text-warning"></i>
                            </div>

                        </a>
                        <div class="contact-box-footer">
                            <div class="m-t-xs btn-group">
                                <a class="btn btn-sm btn-white">
                                    <i class="fa fa-whatsapp"></i>
                                </a>
                                <a class="btn btn-sm btn-white">
                                    <i class="fa fa-instagram"></i>
                                </a>
                                <a class="btn btn-sm btn-white">
                                    <i class="fa fa-facebook"></i>
                                </a>
                                <a class="btn btn-sm btn-white">
                                    <i class="fa fa-google-plus"></i>
                                </a>
                                <a class="btn btn-sm btn-white">
                                    <i class="fa fa-envelope-o"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div class="modal inmodal fade" id="modalRemove" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Modal title</h4>
                        <small class="font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                    </div>
                    <div class="modal-body">
                        <p><strong>Lorem Ipsum is simply dummy</strong> text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-white" data-dismiss="modal">
                            Cancelar
                        </button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal"
                            v-on:click="removeList(indexToRemove)">
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

    import moment from 'moment'

    export default {
        data: function() {
            return {
                customers: []
            }
        },
        methods : {
            loadCustomers(){
                let url = "customers";
                this.$http.get(url).then(
                 response=>{
                   this.customers = response.data
                  // console.log(JSON.stringify(response.data))
                 //  t.total = response.headers['X-Total-Count']
                 },
                 error=>{
                   console.log(error)
                 }).finally(function () {
                 // t.hideLoading();
                })


            },
            formatDate (date) {
                if (date)
                    //return date;
                    return moment(date).locale("pt-br").format('LLLL');
            }
        },
        created(){
            this.loadCustomers();
        },
        mounted: function() {

        }
    };

</script>
