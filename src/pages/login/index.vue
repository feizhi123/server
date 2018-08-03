<template>
    <div class="content overflow-hidden">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <!-- Login Block -->
                <div class="block block-themed animated fadeIn">
                    <div class="block-header bg-primary">
                        <ul class="block-options">
                        </ul>
                        <h3 class="block-title">登录</h3>
                    </div>
                    <div class="block-content block-content-full block-content-narrow">
                        <!-- Login Title -->
                        <h1 class="h2 font-w600 push-30-t push-5">语汐分类平台管理后台</h1>
                        <p>欢迎, 请登录.</p>
                        <!-- END Login Title -->

                        <!-- Login Form -->
                        <!-- jQuery Validation (.js-validation-login class is initialized in js/pages/base_pages_login.js) -->
                        <!-- For more examples you can check out https://github.com/jzaefferer/jquery-validation -->
                        <div class="js-validation-login form-horizontal push-30-t push-50" method="post">
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary ">
                                        <input class="form-control" type="text" id="login-username" v-model="username"
                                               name="login-username">
                                        <label for="login-username">用户名</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary ">
                                        <input class="form-control" type="password" id="login-password"
                                               v-model="password" name="login-password">
                                        <label for="login-password">密码</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12 col-sm-6 col-md-4 ">
                                    <a class="btn btn-block btn-primary" @click="login"><i
                                            class="si si-login pull-right"></i> 登录</a>
                                </div>
                            </div>
                        </div>
                        <!-- END Login Form -->
                    </div>
                </div>
                <!-- END Login Block -->
            </div>
        </div>
    </div>
</template>
<script>
    import adminApi from '@/services/admin.js'
    export default {
        mounted() {
        },
        data() {
            return {
                username: '',
                password: '',
                showModal: false,
            };
        },
        methods: {
            login() {
                let vm = this;
                adminApi.login(vm.username, vm.password).then(data => {
                    if(data.code==0){
                        localStorage.setItem('info-site-username',vm.username)
                        vm.$router.push({path: 'type'});
                    }
                    else{
                        if(data.code==100)
                            vm.$message.error("用户名或密码错误");
                        else
                            vm.$message.error("服务器异常");
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },
    };
</script>

<style lang="scss">
</style>
