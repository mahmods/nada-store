<template>
<section class="content">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>العملاء</h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> الرئيسية</a></li>
            <li><a href="#">العملاء</a></li>
        </ol>
    </section>
    <section class="content">
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">إضافة عميل</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form role="form" @submit.prevent="add">
                <div class="box-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">اسم العميل</label>
                        <input v-model="new_item.name" type="text" class="form-control" placeholder="اسم العميل">
                    </div>
                </div>
                <!-- /.box-body -->

                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">حفظ</button>
                </div>
            </form>
        </div>
        <!-- /.box -->
    </section>
    <!-- /.content -->

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">جميع العملاء</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <datatable v-bind="$data" />
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </section>
    <!-- /.content -->
</section>
</template>

<script>
import { db } from '../firebase';
import DatatableActions from './DatatableActions';

const itemsRef = db.collection('customers');

export default {
    components: { DatatableActions },
    data() {
        return {
            columns: [
                { title: 'اسم العميل', field: 'name' },
                { title: 'إجراءات', tdComp: 'DatatableActions' }
            ],
            data: [],
            total: 0,
            query: {},
            xprops: {
                refName: 'customers'
            },
            new_item: {
                name: "",
            }
        }
    },
    firestore: function () {
        return {
            data: itemsRef,
        }
    },
    watch: {
        query: {
            handler: function(query) {
                if (query.sort && query.order) {
                    this.$bind('data', itemsRef.orderBy(query.sort, query.order).limit(query.limit))
                } else {
                    this.$bind('data', itemsRef.limit(query.limit))
                }
                itemsRef.get().then(snap => {
                    this.total = snap.size
                });
            },
            deep: true
        }
    },
    methods: {
        add() {
            itemsRef.add(this.new_item)
            .then((docRef) => {
                for (var member in this.new_item) this.new_item[member] = "";
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
    }
}
</script>