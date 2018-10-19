<template>
    <section class="content">
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">تعديل عميل</h3>
            </div>
            <!-- /.box-header -->

            <!-- form start -->
            <form role="form" @submit.prevent="add">
                <div class="box-body">
                    <div class="form-group">
                        <label>اسم العميل</label>
                        <input v-model="item.name" type="text" class="form-control" placeholder="اسم العميل">
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

const itemsRef = db.collection('customers');

export default {
    data() {
        return {
            item: {
                name: "",
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
                Toastr.success('تم تعديل العميل!');
                this.$router.push('/customers');
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        }
    }
}
</script>