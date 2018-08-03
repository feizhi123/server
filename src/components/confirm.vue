<template>
  <div ref="modal" class="modal" id="modal-small" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-sm" style="margin-top:100px">
          <div class="modal-content">
              <div class="block block-themed block-transparent remove-margin-b">
                  <div class="block-header bg-primary-dark">
                      <ul class="block-options">
                          <li>
                              <button data-dismiss="modal" type="button"><i class="si si-close"></i></button>
                          </li>
                      </ul>
                      <h3 class="block-title">{{title}}</h3>
                  </div>
                  <div class="block-content">
                      <p>{{content}}</p>
                      <div class="row form-group" v-if="input">
                        <div class="col-md-12">
                          <label>名称</label>
                          <input  class="form-control" v-model="myname"/>
                        </div>
                        <div class="col-md-12" style="margin-top:10px">
                          <label>相关信息</label>
                          <textarea  class="form-control" v-model="myrelate"></textarea>
                        </div>
                      </div>
                  </div>
              </div>
              <div class="modal-footer">
                  <button class="btn btn-sm btn-default" type="button" data-dismiss="modal" @click="$emit('cancel')">取消</button>
                  <button class="btn btn-sm btn-primary" type="button" data-dismiss="modal" @click="$emit('confirm',text)"><i class="fa fa-check"></i>确定</button>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  mounted() {
    let vm = this
    $(this.$refs.modal).on('hidden.bs.modal',()=>{
      vm.$emit('hide')
    })
    $(this.$refs.modal).on('shown.bs.modal',()=>{
      vm.$emit('show')
    })
  },
  props: {
    title: "",
    content: "",
    name:"",
    relate:"",
    show:false,
    input:false
  },
  data() {
    return {
      text:'',
      myname:'',
      myrelate:''
    };
  },
  methods: {},
  computed: {},
  watch:{
    name(val) {
        this.myname = val;
    },
    relate(val) {
        this.myrelate = val;
    },
    myname(val){
        this.$emit("on-name-change",val);
    },
    myrelate(val){
        this.$emit("on-relate-change",val);
    },
    show:function (val, oldVal) {
      if(val){
        $(this.$refs.modal).modal("show");
      }else{
        $(this.$refs.modal).modal({ show: false});
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
