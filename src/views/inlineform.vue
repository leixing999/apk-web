<template>
  <div>
    <el-form :inline="true" :model="inlineform">
      <el-form-item label="审批人">
        <el-input v-model="inlineform.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="inlineform.region" placeholder="请选择活动区域" style="width: 100%;">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">检索</el-button>
      </el-form-item>

    </el-form>


    <el-radio-group v-model="labelPosition" size="small">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: 'inlineform',
  data() {
    return {
      inlineform: {
        user: '',
        region: 'shanghai',
      },
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '区域二',
        type: '',
      },
    };
  },

};
</script>

<style scoped>

</style>
