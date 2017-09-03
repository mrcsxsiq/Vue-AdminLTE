<template>
    <div>

        <div class="wrapper wrapper-content">

            <div class="row">
                <carousel-3d>
                  <slide :index="0">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97270&w=360&h=270"/>
                  </slide>
                  <slide :index="1">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97270&w=360&h=270"/>
                  </slide>
                  <slide :index="2">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97270&w=360&h=270"/>
                  </slide>
                  <slide :index="3">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97270&w=360&h=270"/>
                  </slide>
                  <slide :index="4">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=34&txt=360%C3%97270&w=360&h=270"/>
                  </slide>
                </carousel-3d>

            </div>
        </div>
    </div>
</template>

<script>

    import { Carousel3d, Slide } from 'vue-carousel-3d'

    export default {
        components: {
            Carousel3d,
            Slide
        },
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
