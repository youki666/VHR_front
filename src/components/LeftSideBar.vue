<template>
<!-- 左侧栏 -->
        <div class="panel-group col-sm-2" id="hrms_sidebar_left" role="tablist" aria-multiselectable="true">
             <ul class="nav nav-pills nav-stacked emp_sidebar">
                <li role="presentation" class="active">
                    <a href="#" data-toggle="collapse" data-target="#collapse_emp">
                        <span class="glyphicon glyphicon-user" aria-hidden="true">员工管理</span>
                    </a>
                    <ul class="nav nav-pills nav-stacked" id="collapse_emp">
                      <li role="presentation">
                        <router-link :to="{path:'Employee'}" @click="get(index)">员工信息</router-link>
                      </li>
                      <li role="presentation">
                        <a href="#" role="button" class="emp_add_btn" data-toggle="modal" data-target=".emp-add-modal" @click="empAdd">员工新增</a>
                      </li>
                      <li role="presentation"><a href="#">员工清零</a></li>
                    </ul> 
                </li>
            </ul>
            <ul class="nav nav-pills nav-stacked dept_sidebar">
                <li role="presentation" class="active">
                    <a href="#"  data-toggle="collapse" data-target="#collapse_dept">
                        <span class="glyphicon glyphicon-cloud" aria-hidden="true">部门管理</span>
                    </a>
                    <ul class="nav nav-pills nav-stacked" id="collapse_dept">
                      <li role="presentation">
                        <router-link :to="{path:'Department'}">部门信息</router-link>
                      </li>
                      <li role="presentation">
                        <a href="#" class="dept_add_btn" data-toggle="modal" data-target=".dept-add-modal">部门新增</a>
                      </li>
                      <li role="presentation"><a href="#">部门清零</a></li>
                    </ul> 
                </li>
            </ul>

        </div><!-- /.panel-group，#hrms_sidebar_left -->
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import url from '../util/api.js'
//'https://cors-anywhere.herokuapp.com/'
//
let eventHub = new Vue()
Vue.prototype.$eventHub = eventHub
  export default{
    data(){
      return {
        DeptName: null,
      }
    },
     methods:{
        empAdd(){
          axios.get(url.getDeptName).then(res=>{
              this.DeptName = res.data.extendInfo.departmentList
              this.$eventHub.$emit('DeptName',this.DeptName)
          })
        }
      },
      created(){
        this.empAdd()
      }
  }
</script>