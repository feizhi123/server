<template>
    <div class="container">
        <div class="row border border-radius ">
            <div class="border-bottom padding ">
                <!--<div class="">-->
                    <img src="../../static/logo.jpg" class="img-avatar logo">
                    <label class="font">叮当问财</label>
                    <label class="ellipse fr fa fa-ellipsis-h text-right"></label>
                <!--</div>-->
                <!--<div class="fr">-->
                    <!--<label class="fa fa-ellipsis-h"></label>-->
                <!--</div>-->
            </div>
            <div class=" padding">
                <h5>{{temp.title}}</h5>
                <span>X月X日 hh:mm</span>
            </div>
            <div class="form-horizontal border-bottom padding">
                <div v-for="(d,index) in temp.keys" class="form-group">
                    <label class="col-md-4 ">{{d.name}}</label>
                    <div class="col-md-8">
                        <p class="text-primary ">{{d.value}}</p>
                    </div>
                </div>
            </div>
            <div class=" padding spacebetween">
                <h6 class="">进入小程序查看</h6>
                <h6 class="">></h6>
            </div>


        </div>
    </div>
</template>
<script>

    export default {
        components: {},
        mounted() {
            console.log(this.temp)

        },
        props: ['temp'],
        data() {
            return {}
        },
        methods: {},
    }

</script>
<style lang="scss">
    .border-bottom {
        border-bottom: 1px solid lightgrey;
    }

    .border-radius {
        border-radius: 5px;
    }

    .padding {
        padding: 10px;
    }
    .padding-10{
        padding: 10px 0 10px 0;
    }
    p {
        /*word-break: normal;*/
        white-space: pre-wrap;
        word-wrapL: break-word;
        /*word-break: break-all*/
    }

    .logo {
        width: 50px;
        height: 50px;
    }

    .font {
        font-size: 16px;
    }

    .flex {
        display: flex;
        align-items: center;
    }
    .ellipse{
        position: relative;
        top:20px;
    }
    .spacearound{
        display: flex;
        justify-content: space-around;
    }
    .spacebetween{
        display: flex;
        justify-content: space-between;
    }
</style>