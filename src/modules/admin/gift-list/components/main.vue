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


        <div class=" wrapper-content">
    
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox-content m-b-sm float-e-margins border-bottom">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label class="control-label" for="product_name">Product Name</label>
                                    <input type="text" id="product_name" name="product_name" value="" placeholder="Product Name" class="form-control">
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="form-group">
                                    <label class="control-label" for="price">Price</label>
                                    <input type="text" id="price" name="price" value="" placeholder="Price" class="form-control">
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="form-group">
                                    <label class="control-label" for="quantity">Quantity</label>
                                    <input type="text" id="quantity" name="quantity" value="" placeholder="Quantity" class="form-control">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label class="control-label" for="status">Status</label>
                                    <select name="status" id="status" class="form-control">
                                        <option value="1" selected>Enabled</option>
                                        <option value="0">Disabled</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>

                        <div class="ibox float-e-margins">
                            <div class="ibox-title">
                                <h5>Basic Data Tables example with responsive plugin</h5>
                                <div class="ibox-tools">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                        <i class="fa fa-wrench"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-user">
                                        <li><a href="#">Config option 1</a>
                                        </li>
                                        <li><a href="#">Config option 2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ibox-content">
                                <div class="row">

                                    <div class="col-md-3">
                                        <div class="form-group row">
                                            <div class="col-lg-4">
                                                <select class="form-control m-b">
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-lg-6 col-sm-offset-3">
                                        <div class="btn-group pull-right">
                                            <button type="button" class="btn btn-white">
                                                <i class="fa fa-copy"></i>
                                            </button>
                                            <button type="button" class="btn btn-white">
                                                <i class="fa fa-file-excel-o"></i>
                                            </button>
                                            <button type="button" class="btn btn-white">
                                                <i class="fa fa-file-pdf-o"></i>
                                            </button>
                                            <button type="button" class="btn btn-white">
                                                <i class="fa fa-print"></i>
                                            </button>
                                        </div>
                                        <div class="col-md-8 pull-right">
                                            <div class="input-group" >
                                                <input type="text" placeholder="Search issue by name..." class="form-control" >
                                                <span class="input-group-btn">
                                                    <button type="button" class="btn btn-white">
                                                        <i class="fa fa-search"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover dataTables-example" >
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Foto</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Telefone</th>
                                    <th>Nível</th>
                                    <th>Cliente desde</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="customer in customers">
                                    <td class="center">
                                        <i class="fa fa-circle fa-lg text-danger"></i>
                                    </td>
                                    <td class="client-avatar">
                                        <img :src="customer.picture.thumbnail">
                                    </td>
                                    <td><a href="javascript:;" class="client-link">
                                        {{customer.name.first}} {{customer.name.last}}
                                    </a></td>
                                    <td>{{customer.email}}</td>
                                    <td class="center">{{customer.phone}}</td>
                                    <td class="center">
                                        <i class="fa fa-star fa-lg text-warning"></i>
                                        <i class="fa fa-star fa-lg text-warning"></i>
                                        <i class="fa fa-star-half-o fa-lg text-warning"></i>
                                        <i class="fa fa-star-o fa-lg text-warning"></i>
                                        <i class="fa fa-star-o fa-lg text-warning"></i>
                                    </td>
                                    <td class="center">{{ formatDate(customer.registered)}}</td>
                                </tr>
                                </tbody>
                                <!--
                                <tfoot>
                                <tr>
                                    <th>Rendering engine</th>
                                    <th>Browser</th>
                                    <th>Platform(s)</th>
                                    <th>Engine version</th>
                                    <th>CSS grade</th>
                                </tr>
                                </tfoot>
                                -->
                                </table>
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
                let url = "http://localhost:3000/customers";
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
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green',
            });

            $('.dataTables-example1').DataTable({
                pageLength: 25,
                responsive: true,
                dom: '<"html5buttons"B>lTfgitp',
                buttons: [
                    {extend: 'copy', text: '<i class="fa fa-files-o" aria-hidden="true"></i>'},
                    {extend: 'csv', title: 'ExampleFile', text: '<i class="fa fa-file-excel-o" aria-hidden="true"></i>'},
                    {extend: 'excel', title: 'ExampleFile', text: '<i class="fa fa-file-excel-o" aria-hidden="true"></i>'},
                    {extend: 'pdf', title: 'ExampleFile', text: '<i class="fa fa-file-pdf-o" aria-hidden="true"></i>'},

                    {extend: 'print', text: '<i class="fa fa-print" aria-hidden="true"></i>',
                     customize: function (win){
                            $(win.document.body).addClass('white-bg');
                            $(win.document.body).css('font-size', '10px');
                            $(win.document.body).find('table')
                                    .addClass('compact')
                                    .css('font-size', 'inherit');
                                }
                    }
                ]

            });

        }
    };

</script>
