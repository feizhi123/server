<template>
  <!-- Header -->
  <header id="header-navbar" class="content-mini content-mini-full">
    <!-- Header Navigation Right -->
    <ul class="nav-header pull-right">
        <li>
            <div class="btn-group">
                <button class="btn btn-default btn-image dropdown-toggle" data-toggle="dropdown" type="button">
                    <img src="~@/assets/imgs/avatar.jpg" alt="Avatar" style="width:30px">
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu dropdown-menu-right">
                    <li class="dropdown-header">用户:{{username}}</li>
                    <li class="dropdown-header">Actions</li>
                    <li>
                        <router-link tabindex="-1" to="/login">
                            <i class="si si-logout pull-right"></i>
                            <span @click="clearlocal">退出登录</span>                       
                        </router-link>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
  <ul class="nav-header pull-left">
      <li class="hidden-md hidden-lg">
          <!-- Layout API, functionality initialized in App() -> uiLayoutApi() -->
          <button class="btn btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
              <i class="fa fa-navicon"></i>
          </button>
      </li>
      <li class="hidden-xs hidden-sm">
          <!-- Layout API, functionality initialized in App() -> uiLayoutApi() -->
          <button class="btn btn-default" data-toggle="layout" data-action="sidebar_mini_toggle" type="button">
              <i class="fa fa-ellipsis-v"></i>
          </button>
      </li>
  </ul>
  </header>
  <!-- END Header -->
</template>
<script>
var uiLayoutApi = function($mode) {
    var $windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var $lPage = $('#page-container')
    // Mode selection
    switch($mode) {
        case 'sidebar_toggle':
            if ($windowW > 991) {
                $lPage.toggleClass('sidebar-o');
            } else {
                $lPage.toggleClass('sidebar-o-xs');
            }
            break;
        case 'sidebar_mini_toggle':
            if ($windowW > 991) {
                $lPage.toggleClass('sidebar-mini');
            }
            break;
        default:
            return false;
    }
};
export default {
  mounted() {
    var $lHtml = $('html');
    $('[data-toggle="layout"]').on('click', function(){
        var $btn = $(this);
        uiLayoutApi($btn.data('action'));
        if ($lHtml.hasClass('no-focus')) {
            $btn.blur();
        }
    });
    this.username=localStorage.getItem('info-site-username');
  },
  props: {},
  data() {
    return {
        username:''
    };
  },
  methods: {
      clearlocal(){
          localStorage.removeItem('info-site-token')
          localStorage.removeItem('info-site-username')
      }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
</style>
