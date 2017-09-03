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
                    <router-link to="/admin/product/add" class="btn btn-success">
                        <i class="fa fa-plus fa-fw"></i> Adicionar
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
                <button type="button" class="btn btn-primary">
                    <i class="fa fa-filter"></i>
                </button>

            </div>
            <div class="row">
                <div class="col-md-15 col-xs-3" v-for="product in products">
                    <div class="ibox">
                        <div class="ibox-content product-box">

                            <router-link
                                :to="{name: 'ProductDetail', params : {id : product.id}}" class="product-imitation-3">
                                 <div v-if="product.picture.length > 0">
                                     <img style="padding: 17px 0; width:100%" :src="product.picture[0]" data-pin-nopin="true">
                                </div>
                                <div v-else style="padding: 90px 0;">[ SEM IMAGEM ]</div>
                            </router-link>
                            <div class="product-desc">
                                <span class="product-price">
                                    R$ {{product.price.current_price}}
                                </span>
                                <small class="text-muted">{{product.category}}</small>
                                <router-link
                                    :to="{name: 'ProductDetail', params : {id : product.id}}"
                                    class="product-name">
                                    {{product.title}}
                                </router-link>
                                <div class="small m-t-xs">
                                    {{product.short_description}}
                                </div>
                                <div class="m-t text-right">
                                    <router-link
                                        :to="{name: 'ProductDetail', params : {id : product.id}}"
                                        class="btn btn-xs btn-outline btn-primary">
                                        Info <i class="fa fa-long-arrow-right"></i>
                                    </router-link>
                                </div>
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
    import http from 'src/http'

    export default {
        data: function() {
            return {
                products: []
            }
        },
        methods : {
            loadCustomers(){
                http.get('https://mrcsxsiq-server.herokuapp.com/products', {
                    params: {
                    //    ID: 12345
                    }
                })
                .then (response => response.data)
                .then (data => {
                    this.products = data;
                })
                .catch(function (error) {
                    console.log(error);
                })
            },
            formatDate (date) {
                if (date)
                    return moment(date).locale("pt-br").format('LLLL');
            }
        },
        created: function(){
            this.loadCustomers();
        },
        mounted: function() {

        }
    };

</script>
