<template>
  <div class="btn-group btn-group-sm">
    <button class="btn btn-danger" title="Delete" @click="remove()">
      <i class="fa fa-trash"></i>
    </button>
    <button class="btn btn-default" title="Edit" @click="edit()">
      <i class="fa fa-edit"></i>
    </button>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  props: ['row', 'xprops'],
  methods: {
    edit() {
        this.$router.push(`/${this.xprops.refName}/` + this.row.id);
    },
    remove() {
      db.collection(this.xprops.refName).doc(this.row.id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
  }
}
</script>