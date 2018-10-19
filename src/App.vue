<template>
  <!-- Site wrapper -->
  <div class="wrapper">

    <header class="main-header">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>م</b></span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>المخزن</b></span>
      </router-link>
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
      </nav>
    </header>

    <!-- =============================================== -->

    <!-- right side column. contains the sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
          <div class="pull-right image">
            <img src="../public/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-right info">
            <p>Alexander Pierce</p>
            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">
          <li class="header">MAIN NAVIGATION</li>
          <li class="treeview">
            <router-link to="/"><i class="fa fa-dashboard"></i> <span>الرئيسية</span></router-link>
          </li>
          <li class="treeview">
            <router-link to="/products"><i class="fa fa-dashboard"></i> <span>المنتجات</span></router-link>
          </li>
          <li class="treeview">
            <router-link to="/invoices"><i class="fa fa-dashboard"></i> <span>الفواتير</span></router-link>
          </li>
          <li class="treeview">
            <router-link to="/customers"><i class="fa fa-dashboard"></i> <span>العملاء</span></router-link>
          </li>
          <li class="treeview">
            <router-link to="/users"><i class="fa fa-dashboard"></i> <span>المستخدمين</span></router-link>
          </li>
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- =============================================== -->

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <router-view class="content-wrapper"></router-view>
    </div>
    <!-- /.content-wrapper -->

    <footer class="main-footer">
      <div class="pull-left hidden-xs">
        <b>إصدار</b> 1.0.0
      </div>
      <strong>جميع الحقوق محفوظة &copy; 2018-2019</strong>
    </footer>

    <!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
  <!-- ./wrapper -->
</template>

<script>
  export default {
    name: 'app',
  }
</script>