<template>
  <div>
    <el-container>
      <el-header class="header">header</el-header>
      <el-main class="main">main</el-main>
    </el-container>

    <el-container>
      <el-aside width="200px">aside</el-aside>
      <el-main class="main">main</el-main>
    </el-container>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>



    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <hr>

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'container',
};
</script>

<style scoped>
  .header{
    min-height: 30px;
    background-color: #99a9bf;

  }
  .footer{
    min-height: 30px;
    bottom: 0px;
    background-color: #d3dce6;
  }
  .main{
    background-color: #42b983;
    height: 200px;
    border: 1px solid red;
    text-align: center;
    line-height: 200px;
  }
  .el-aside{
    text-align: center;
    line-height: 200px;
    background-color: red;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
