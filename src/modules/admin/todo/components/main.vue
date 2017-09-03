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
                    <router-link to="/" class="btn btn-primary" exact>
                        This is action area
                    </router-link>
                </div>
            </div>
        </div>


        <div class="wrapper-content">

            <div class="row" style="display: none;">
                <div class="middle-box text-center animated fadeInUp">
                    <h3 class="font-bold">This is page content</h3>
                    <div class="error-desc">
                        You can create here any grid layout you want. And any variation layout you imagine:) Check out
                        main dashboard and other site. It use many different layout.
                        <br/><router-link to="/" class="btn btn-primary m-t">Dashboard</router-link>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <div class="ibox-content">
                        <h2>TODO List</h2>
                        <div class="input-group">
                            <input type="text" placeholder="placeholder" class="form-control" v-model="entrada" v-on:keyup.enter="addList()">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-primary" v-on:click="addList()">Adicionar</button>
                            </span>
                        </div>
                        <div class="m-t">
                            <draggable element="ul"
                            class="todo-list" v-model="list" @start="drag=true" @end="drag=false">
                                <li v-for="(item, index) in list" style="cursor:move">
                                    <div class="i-checks">
                                        <div
                                            class="icheckbox_square-green"
                                            v-on:click="item.checked = !item.checked"
                                            v-bind:class="[item.checked ? 'checked' : '']">
                                        </div>

                                        <label class="m-l-xs"
                                            v-bind:class="[item.checked ? 'todo-completed' : '']">
                                            {{ item.message }}
                                            <small class="label label-primary">
                                                <i class="fa fa-clock-o"></i>
                                                {{ formatDate(item.time) }}
                                            </small>
                                        </label>

                                        <button class="pull-right btn btn-danger btn-xs" type="button"
                                        v-on:click="setIndexToRemove(index)"
                                        data-toggle="modal" data-target="#modalRemove">
                                            <i class="fa fa-times"></i>
                                        </button>
                                    </div>
                                </li>
                            </draggable>
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

    import draggable from 'vuedraggable'
    import moment from 'moment'

    export default {
        components: {
            draggable
        },
        data: function() {
            return {
                entrada : "item",
                indexToRemove : -1,
                list: [
                    { message: 'item 1', checked: true, time : new Date().getTime()  - 1000 * 60 * 5},
                    { message: 'item 2', checked: false, time : new Date().getTime() - 1000 * 60 * 4 },
                    { message: 'item 3', checked: true, time : new Date().getTime() - 1000 * 60 * 3},
                    { message: 'item 4', checked: false, time : new Date().getTime() - 1000 * 60 * 2 },
                    { message: 'item 5', checked: true, time : new Date().getTime() - 1000 * 60 * 1}
                ]
            }
        },
        methods : {
            addList(){
                if (this.entrada){
                    this.list.push(
                        {
                            message: this.entrada,
                            checked: false,
                            time: new Date().getTime()
                        }
                    )
                    this.entrada = "";
                } else {
                    this.$swal({
                        title: "Tá vazio!",
                        text: "vacilão!",
                        type: "error",
                        confirmButtonText: 'poxa'
                    });
                }
            },
            setIndexToRemove(index){
                this.indexToRemove = index;
            },
            removeList(index){
                if (index > -1) {
                    this.list.splice(index, 1);
                    this.indexToRemove = -1;
                }
            },
            formatDate (date) {
                if (date)
                    //return date;
                    return moment(date).locale("pt-br").format('LLLL');
            }
        }
    };

</script>
