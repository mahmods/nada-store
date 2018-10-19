<template>
    <section class="content">
        <div class="row">
            <div class="col-lg-3 col-xs-6">
                <!-- small box -->
                <div class="small-box bg-red">
                    <div class="inner">
                        <h3>65</h3>

                        <p>المستخدمين</p>
                    </div>
                    <div class="icon">
                        <i class="ion ion-ios-people"></i>
                    </div>
                    <router-link to="/users" class="small-box-footer">جميع المستخدمين <i class="fa fa-arrow-circle-right"></i></router-link>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-xs-6">
                <!-- small box -->
                <div class="small-box bg-yellow">
                    <div class="inner">
                        <h3>44</h3>

                        <p>العملاء</p>
                    </div>
                    <div class="icon">
                        <i class="ion ion-ios-business"></i>
                    </div>
                    <router-link to="/customers" class="small-box-footer">جميع العملاء <i class="fa fa-arrow-circle-right"></i></router-link>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-xs-6">
                <!-- small box -->
                <div class="small-box bg-green">
                    <div class="inner">
                        <h3>53<sup style="font-size: 20px">%</sup></h3>

                        <p>الفواتير</p>
                    </div>
                    <div class="icon">
                        <i class="ion ion-ios-stats"></i>
                    </div>
                    <router-link to="/invoices" class="small-box-footer">جميع الفواتير <i class="fa fa-arrow-circle-right"></i></router-link>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-xs-6">
                <!-- small box -->
                <div class="small-box bg-aqua">
                    <div class="inner">
                        <h3>150</h3>

                        <p>المنتجات</p>
                    </div>
                    <div class="icon">
                        <i class="ion ion-ios-cart"></i>
                    </div>
                    <router-link to="/products" class="small-box-footer">جميع المنتجات <i class="fa fa-arrow-circle-right"></i></router-link>
                </div>
            </div>
            <!-- ./col -->
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style>

</style>