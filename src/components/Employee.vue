<template>
  <div id="app">
   <div class="hrms_container">
     <!-- 导航栏 -->
   <navhead/>

    <!-- 中间部分（包括左边栏和员工/部门表单显示部分） -->
    <div class="hrms_body" style="position:relative; top:-15px;">

        <!-- 左侧栏 -->
       <leftside/>
       
         <emp/>
    </div><!-- /.hrms_body -->


    <!-- 尾部 -->
      <foot/>

</div><!-- /.container -->
  </div>
</template>

<script>
import navhead from '@/components/Header';
import leftside from '@/components/LeftSideBar';
import foot from '@/components/Footer';
import welcome from '@/components/Welcome';
import emp from '@/components/emp'
export default {
  name: 'App',
  components:{ navhead,leftside,welcome,foot,emp}
 
 
}
</script>

<style>

</style>