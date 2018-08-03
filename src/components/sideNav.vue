<template>
    <nav id="sidebar">
        <!-- Sidebar Scroll Container -->
        <div id="sidebar-scroll">
            <!-- Sidebar Content -->
            <!-- Adding .sidebar-mini-hide to an element will hide it when the sidebar is in mini mode -->
            <div class="sidebar-content">
                <!-- Side Header -->
                <div class="side-header side-content bg-white-op">
                    <!-- Layout API, functionality initialized in App() -> uiLayoutApi() -->
                    <button @click="close" class="btn btn-link text-gray pull-right hidden-md hidden-lg" type="button"
                            data-toggle="layout" data-action="sidebar_close">
                        <i class="fa fa-times"></i>
                    </button>
                    <a class="h5 text-white" href="/">
                        <span class="h5 font-w600 sidebar-mini-hide">语汐分类平台管理后台</span>
                    </a>
                </div>
                <!-- END Side Header -->
                <!-- Side Content -->
                <div class="side-content">
                    <ul class="nav-main">
                        <li v-for="(m,index) in menus" :key="index">
                            <a v-if="m.subMenus" class="nav-submenu" data-toggle="nav-submenu" href="#">
                                <!--<i class="si si-badge"></i>-->
                                <img :src="m.icon" class="icon">
                                <span class="sidebar-mini-hide">{{m.name}}</span>
                            </a>
                            <router-link v-if="!m.subMenus" :to="m.path">
                                <!--<i class="si si-badge"></i>-->
                                <img :src="m.icon" class="icon">
                                <span class="sidebar-mini-hide">{{m.name}}</span>
                            </router-link>
                            <ul v-if="m.subMenus">
                                <li @click="close" v-for="(sm,i) in m.subMenus" :key="i">
                                <router-link :to="sm.path">{{sm.name}}</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- END Side Content -->
            </div>
            <!-- Sidebar Content -->
        </div>
        <!-- END Sidebar Scroll Container -->
    </nav>
</template>

<script>
    import {mapGetters} from "vuex";
    let menus = [
        {
            name: "分类管理",
            path: "/type",
            icon: '/static/question.png',
        },
        {
            name: "信息管理",
            path: "/a_details",
            icon: '/static/message.png',
        }
    ];
    export default {
        mounted() {
            this.$lPage = $("#page-container");
            setTimeout(() => {
                // 这里写jquery代码
                $('[data-toggle="nav-submenu"]').on("click", function (e) {
                    // Get link
                    var $link = jQuery(this);
                    // Get link's parent
                    var $parentLi = $link.parent("li");
                    if ($parentLi.hasClass("open")) {
                        // If submenu is open, close it..
                        $parentLi.removeClass("open");
                    } else {
                        // .. else if submenu is closed, close all other (same level) submenus first before open it
                        $link
                            .closest("ul")
                            .find("> li")
                            .removeClass("open");
                        $parentLi.addClass("open");
                    }
                    // Remove focus from submenu link
                    if ($("html").hasClass("no-focus")) {
                        $link.blur();
                    }
                    return false;
                });
            }, 10);
        },
        props: {},
        data() {
            return {
                menus: menus
            };
        },
        methods: {
            close() {
                var $windowW =
                    window.innerWidth ||
                    document.documentElement.clientWidth ||
                    document.body.clientWidth;
                this.$lPage.removeClass("sidebar-o-xs");
            }
        }
    };
</script>
<style lang="scss" scoped>
    .logo {
        width: 40px;
        height: 40px;
    }
    .icon {
        width: 20px;
        height: 20px;
    }
</style>
