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


        <div class="wrapper-content">

            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox product-detail">
                        <div class="ibox-content">
                            <div class="row">
                                <div class="col-md-5">
                                    <slick
                                        ref="slick"
                                        class="product-images"
                                        :options="slickOptions">
                                        <div>
                                            <div class="image-imitation">
                                                [IMAGE 1]
                                            </div>
                                        </div>
                                        <div>
                                            <div class="image-imitation">
                                                [IMAGE 2]
                                            </div>
                                        </div>
                                        <div>
                                            <div class="image-imitation">
                                                [IMAGE 3]
                                            </div>
                                        </div>
                                        <div>
                                            <div class="image-imitation">
                                                [IMAGE 4]
                                            </div>
                                        </div>
                                        <div>
                                            <div class="image-imitation">
                                                [IMAGE 5]
                                            </div>
                                        </div>
                                    </slick> 

                                </div>
                                <div class="col-md-7">

                                    <h2 class="font-bold m-b-xs">
                                        Desktop publishing software
                                    </h2>
                                    <small>Many desktop publishing packages and web page editors now.</small>
                                    <div class="m-t-md">
                                        <h2 class="product-main-price">$406,602 <small class="text-muted">Exclude Tax</small> </h2>
                                    </div>
                                    <hr>

                                    <h4>Product description</h4>

                                    <div class="small text-muted">
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is

                                        <br/>
                                        <br/>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable.
                                    </div>
                                    <dl class="small m-t-md">
                                        <dt>Description lists</dt>
                                        <dd>A description list is perfect for defining terms.</dd>
                                        <dt>Euismod</dt>
                                        <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                        <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                        <dt>Malesuada porta</dt>
                                        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                                    </dl>
                                    <hr>

                                    <div>
                                        <div class="btn-group">
                                            <button class="btn btn-primary btn-sm"><i class="fa fa-cart-plus"></i> Add to cart</button>
                                            <button class="btn btn-white btn-sm"><i class="fa fa-star"></i> Add to wishlist </button>
                                            <button class="btn btn-white btn-sm"><i class="fa fa-envelope"></i> Contact with author </button>
                                        </div>
                                    </div>



                                </div>
                            </div>

                        </div>
                        <div class="ibox-footer">
                            <span class="pull-right">
                                Full stock - <i class="fa fa-clock-o"></i> 14.04.2016 10:04 pm
                            </span>
                            The generated Lorem Ipsum is therefore always free
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import Slick from 'vue-slick'

    export default {
        components : {
            Slick
        },
        data () {
            return {
                id: this.$route.params.id,
                products: [],
                slickOptions: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true
                }
            }
        },
        methods : {
            loadCustomer(id){
                let url = "products/"+this.id;
                this.$http.get(url).then(
                 response=>{

                   this.products = response.data
                   console.log(response.data)
                 //  t.total = response.headers['X-Total-Count']
                 },
                 error=>{
                   console.log(error)
                 }).finally(function () {
                 // t.hideLoading();
                 if (this.products.length <= 0){
                //    this.$router.push('/');
                 }
                })
            }
        },
        created: function(){
            this.loadCustomer();
        },
        mounted : function() {

        }
    }

</script>
