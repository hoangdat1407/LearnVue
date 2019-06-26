<template>
    <div class="wrapper">

        <header class="main-header">
            <!-- Logo -->
            <a href="index2.html" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini">LEARN-VUE</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg">LEARN-VUE</span>
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top">
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span class="sr-only">Toggle navigation</span>
                </a>

                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- User Account: style can be found in dropdown.less -->
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <span class="hidden-xs">HD</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="user-footer">
                                    <div class="pull-right">
                                        <a href="#" class="btn btn-default btn-flat" @click="logout()">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <aside class="main-sidebar">
            <section class="sidebar">
                <div class="user-panel">
                    <div class="pull-left image">
                        <p>x</p>
                    </div>
                    <div class="pull-left info">
                        <p>HD</p>
                    </div>
                </div>
                <ul class="sidebar-menu" data-widget="tree">
                    <li class="header">MAIN NAVIGATION</li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-edit"></i> <span>Menu 1</span>
                            <span class="pull-right-container">
                              <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li class="active">
<!--                                <router-link :to="{ name: 'input-front'}">-->
                                <a href="#"><i class="fa fa-circle-o"></i>Menu 1_1</a>
<!--                                </router-link>-->
                            </li>
                            <li>
<!--                                <router-link :to="{ name: 'input-behind'}">-->
                                <a href="#"> <i class="fa fa-circle-o"></i>Menu 1_2</a>
<!--                                </router-link>-->
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link :to="{ name: 'LearnVue'}">
                        <i class="fa fa-book"></i> <span>Learn Vue</span>
                        </router-link>
                    </li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-laptop"></i>
                            <span>Menu 3</span>
                            <span class="pull-right-container">
                              <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu" style="display: none;">
                            <li>
<!--                                <router-link :to="{ name: 'ListDriverLicenseFront'}">-->
                                <a href="#"> <i class="fa fa-circle-o"></i> <span>Menu 3_1</span></a>
<!--                                </router-link>-->
                            </li>
                            <li><a href="buttons.html"><i class="fa fa-circle-o"></i> Menu 3_2</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Page_Vue_2'}">
                        <a href=""><i class="fa fa-dashboard"></i> <span>Page Vue 2</span></a>
                        </router-link>
                    </li>
                </ul>
            </section>
            <!-- /.sidebar -->
        </aside>

        <div class="app-content content container-fluid content-wrapper">
            <div class="content-wrapper">
                <router-view></router-view>
            </div>
        </div>
        <footer class="main-footer">
            <div class="pull-right hidden-xs">
                <b>Version</b> 1.0
            </div>
            <strong>HD</strong>
        </footer>

    </div>
</template>

<script>
    export default {
        name: "Layout",
        created(){
        },
        data(){
            return {
                username : '',
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
