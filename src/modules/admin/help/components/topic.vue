<template>
    <div>
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-sm-4">
                <h2>This is main title</h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="index.html">This</a>
                    </li>
                    <li>
                        <a href="index.html">is</a>
                    </li>
                    <li class="active">
                        <strong>Breadcrumb</strong>
                    </li>
                </ol>
            </div>
        </div>


        <div class="row">
            <div class="col-lg-12">

                <div class="wrapper-content">

                    <div class="ibox-content m-b-sm border-bottom">
                        <div class="text-center p-lg">
                            <h2>If you don't find the answer to your question</h2>
                            <span>add your question by selecting </span>
                            <button title="Create new cluster" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> <span class="bold">Add question</span></button> button
                        </div>
                    </div>

                    <div class="faq-item">
                        <div class="row">
                            <div class="col-md-9">
                                <router-link
                                    to="/admin/help/topic/article"
                                    class="product-name">
                                    Tenho uma perguntínea kkk
                                    Kero cadastra um item novo?
                                    Comofas?/!!??/!11!1one?1!1!uno?!1onze
                                </router-link>
                                <small>Added by <strong>Alex Smith</strong> <i class="fa fa-clock-o"></i> Today 2:40 pm - 24.06.2014</small>
                            </div>
                            <div class="col-md-3 text-right">
                                <span class="small font-bold">Robert Nowak</span>
                                <div class="tag-list">
                                    <span class="tag-item">App</span>
                                    <span class="tag-item">License</span>
                                    <span class="tag-item">What?</span>
                                    <span class="tag-item">License</span>
                                    <span class="tag-item">Softaware</span>
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
