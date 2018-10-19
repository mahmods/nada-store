<template>
    <section class="content">
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">تعديل منتج</h3>
            </div>
            <!-- /.box-header -->

            <!-- form start -->
            <form role="form" @submit.prevent="add">
                <div class="box-body">
                    <div class="form-group">
                        <label>اسم المنتج</label>
                        <input v-model="item.name" type="text" class="form-control" placeholder="اسم المنتج">
                    </div>
                    <div class="form-group">
                        <label>السعر</label>
                        <input v-model="item.price" type="text" class="form-control" placeholder="السعر">
                    </div>
                    <div class="form-group">
                        <label>الكمية</label>
                        <input v-model="item.qty" type="text" class="form-control" placeholder="الكمية">
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
</template>

<script>
import { db } from '../firebase';

import * as Toastr from 'toastr';
import './/../../node_modules/toastr/build/toastr.css'; 
Toastr.options.timeout = 2000;
Toastr.options.positionClass = "toast-bottom-left";

const itemsRef = db.collection('products');

export default {
    data() {
        return {
            item: {
                name: "",
                price: "",
                qty: ""
            }
        }
    },
    mounted: function() {
        itemsRef.doc(this.$route.params.id).get().then((doc) => {
            console.log(doc);
            this.item = doc.data();
        });
    },
    methods: {
        add: function() {
            itemsRef.doc(this.$route.params.id).set(this.item)
            .then(() => {
                console.log("Document written with ID: ", this.$route.params.id);
                Toastr.success('تم تعديل المنتج!');
                this.$router.push('/products');
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        }
    }
}
</script>