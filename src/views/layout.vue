<template>
  <div>
    <h1>基本布局</h1>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>

      <el-col :span="12">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"> <div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="8"> <div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-row>
      <el-col :span="6"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"> <div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"> <div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>

    <el-row>
      <el-col :span="4"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"> <div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="4"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"> <div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="4"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"> <div class="grid-content bg-purple-dark"></div></el-col>

    </el-row>

    <h1>分隔栏</h1>
    <el-row :gutter="6">
      <el-col :span="6"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"> <div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"> <div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>

    <h1>混合布局</h1>

    <el-row :gutter="6">
      <el-col :span="6"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18"> <div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row :gutter="6">
      <el-col :span="6"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"> <div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="4"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"> <div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>

    <el-row :gutter="6">
      <el-col :span="8"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"> <div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="4"> <div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <h1>分栏偏移</h1>

    <el-row :gutter="6" >
      <el-col :span="6"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6" :offset="6"> <div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>

    <el-row :gutter="6" >
      <el-col :span="6" :offset="6"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6" :offset="6"> <div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row :gutter="6" >
      <el-col :span="6" :offset="6"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"> <div class="grid-content bg-purple-dark"><el-button type="primary" icon="el-icon-platform-eleme">测试</el-button></div></el-col>
    </el-row>

    <el-row :gutter="6" >
      <el-col :span="6" :pull="3"> <div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6" :offset="6" > <div class="grid-content bg-purple-dark"><el-button type="primary" icon="el-icon-platform-eleme">测试</el-button></div></el-col>
    </el-row>

    <h1>对齐方式 </h1>
    <el-row type="flex" class="row-bg">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'layout',
};
</script>

<style scoped>
 body{
   margin: 0;
   padding: 0;
 }
.el-row{
  margin-bottom: 20px;
  &:last-child{
     margin-bottom: 0px;
   }
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}

 .row-bg {
   padding: 10px 0;
 }


</style>
