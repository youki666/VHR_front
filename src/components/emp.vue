<template>
  <div>
	   <div class="emp_info col-sm-10">
              
            <div class="panel panel-success">

                <!-- 路径导航 -->
                <div class="panel-heading">
                  <ol class="breadcrumb">
                    <li><a href="#">员工管理</a></li>
                    <li class="active">员工信息</li>
                  </ol>
                </div>
                <!-- Table -->
                <table class="table table-bordered table-hover" id="emp_table">
                      <thead>
                          <th>员工编号</th>
                          <th>员工姓名</th>
                          <th>邮箱</th>
                          <th>性别</th>
                          <th>部门</th>
                          <th>操作</th>
                      </thead>
                      <tbody>
                          <tr v-for="(item,index) in EmpList">
                              <td>{{item.empId}}</td>
                              <td>{{item.empName}}</td>
                              <td>{{item.empEmail}}</td>
                              <td>{{item.gender == "F"? "女": "男"}}</td>
                              <td>{{item.department.deptName}}</td>
                              <td>
                                <a href="#" role="button" class="btn btn-primary emp_edit_btn" data-toggle="modal" data-target=".emp-update-modal" @click="get(index)">编辑</a>
                                    <a href="#" role="button" class="btn btn-danger emp_delete_btn"
                                      @click="deleteEmp">删除</a>
                              </td>
                          </tr>
                      </tbody>
                  </table>

                  <div class="panel-body">
                      <div class="table_items">
                          当前第<span class="badge">{{pageNo}}</span>页，共有<span class="badge">{{totalPages}}</span>页，总记录数<span class="badge">{{totalItems}}</span>条。
                      </div>
                      <nav aria-label="Page navigation" class="pull-right">
                        <ul class="pagination">
                          <li @click="changePage(0)"><a href="#">首页</a></li>
                          <li class="disabled">
                            <a href="#" aria-label="Previous" >
                              <span aria-hidden="true" >&laquo;</span>
                            </a>
                          </li>
                            <li  v-for="(item,index) in EmpList" @click="changePage(index)" :class="{'active':index == pageNo-1}">
                                 <a>{{index+1}}</a>

                               </li>
                          <li @click="changePage(pageNo++)">
                            <a href="#" aria-label="Next" >
                              <span aria-hidden="true" >&raquo;</span>
                            </a>
                          </li>
                          <li @click="changePage(msg.totalPages-1)"><a href="#">尾页</a></li>
                        </ul>
                      </nav>
                  </div>
              </div><!-- /.panel panel-success -->
         </div><!-- /.emp_info -->
         <div class="modal fade emp-add-modal" id="emp-add-modal" tabindex="-1" role="dialog" aria-labelledby="emp-add-modal" >
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">员工新增</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal add_emp_form">
                    <div class="form-group" :class = "{'has-success': success,'has-error':fail}">
                        <label for="add_inputName" class="col-sm-2 control-label">姓名</label>
                        <div class="col-sm-8">
                            <input type="text" name="empName" class="form-control" v-model = "employee.inputName" @change="checkName" placeholder="如：张三">
                            <span  v-text="tips1" class="help-block"></span>
                        </div>
                    </div>
                    <div class="form-group" :class = "{'has-success': Emailsuccess,'has-error':Emailfail}">
                        <label for="add_inputEmail" class="col-sm-2 control-label">邮箱</label>
                        <div class="col-sm-8">
                            <input type="email" name="empEmail" class="form-control" v-model="employee.inputEmail" placeholder="zs@qq.com">
                            <span v-text="tips2" class="help-block"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">性别</label>
                        <div class="col-sm-8">
                            <label class="radio-inline">
                                <input type="radio" checked="checked" name="gender" id="add_inputGender1" value="M"
                                v-model ="employee.gender"> 男
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="gender" id="add_inputGender2" value="F"
                                 v-model ="employee.gender"> 女
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="add_department" class="col-sm-2 control-label">部门</label>
                        <div class="col-sm-8">
                            <div class="checkbox">
                                <select class="form-control" name="departmentId" id="add_department" v-model="employee.departmentId">
                                  <option disabled "selected">请选择</option>
                                    <option v-for="item in deptName" :value="item.deptId">
                                         {{item.deptName}}
                                       </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary emp_save_btn" @click="save">保存</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<div class="modal fade emp-update-modal" tabindex="-1" role="dialog" aria-labelledby="emp-update-modal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">员工更改</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal update_emp_form">
                    <div class="form-group">
                        <label  for="update_static_empName" class="col-sm-2 control-label">姓名</label>
                        <div class="col-sm-8">
                            <input class="form-control" name="empName" id="update_static_empName"
                          v-model='emp.empName'></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="update_empEmail" class="col-sm-2 control-label">邮箱</label>
                        <div class="col-sm-8">
                            <input type="email" name="empEmail" class="form-control" v-model='emp.empEmail' id="update_empEmail">
                            <span id="helpBlock_update_inputEmail" class="help-block"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">性别</label>
                        <div class="col-sm-8">
                            <label class="radio-inline">
                                <input type="radio" name="gender" id="update_empGender1"  
                                  v-model="emp.gender" value="M" >男
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="gender" id="update_empGender2"
                                 v-model ="emp.gender" value="F" > 女
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="update_department" class="col-sm-2 control-label">部门</label>
                        <div class="col-sm-8">
                            <div class="checkbox">
                                <select class="form-control" name="departmentId" id="update_department"
                                v-model="emp.departmentId" >
                                   
                                <option  v-for="item in deptName" :value='item.deptId' v-model="emp.departmentId">{{item.deptName}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary emp_update_btn" @click="updateEmployee">保存</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</div>
</template>
<script>
import axios from 'axios'
import url from '../util/api.js'
//'https://cors-anywhere.herokuapp.com/'
  export default{
    data(){
      return {
        msg:null,
        EmpList:null,
        pageNo:1,
        totalPages:0,
        totalItems:0,
        isequal:false,
        deptName:null,
        employee:{
          inputName:null,
          inputEmail:null,
          gender:null,
          departmentId:null
        },
        
        success:false,
        fail:false,
        tips1:'',
        tips2:'',
        Emailfail:false,
        Emailsuccess:false,
        index:0,
        emp:{},
        department:{},
    }
        
    },
     methods:{
        getEmpList(){
          
          axios.get(url.getEmpList+this.pageNo).then(res=>{
            //console.log(res.data.extendInfo.msg)
              this.msg = res.data.extendInfo.msg
              this.EmpList = res.data.extendInfo.msg.employee
               this.length = this.msg.employee.length;
               this.totalPages = this.msg.totalPages
               this.totalItems = this.msg.totalItems

          })
        },
        checkName(){
          axios.get(url.checkEmpName+this.employee.inputName)
          .then(res=>{
           // console.log(res.data)
            if(res.data.code ==100){
              this.success = true
              this.tips1 = '用户名可用!'
              this.fail = false
            }else{
              this.fail = true
              this.success = false
              this.tips1 = res.data.extendInfo.name_reg_error
            }

          })
        },
        save(){
          var regEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
            if (!regEmail.test(this.employee.inputEmail)){
              this.Emailfail = true;
              this.tips2 = "邮箱格式不正确，请重新输入！"
              this.Emailsuccess =false
              return false;
            }else{
              this.Emailfail = false;
              this.tips2 = ""
              this.Emailsuccess =true
            }
           axios.post(url.addEmp+this.employee.inputName+'&empEmail='+this.employee.inputEmail+'&gender='+this.employee.gender+'&departmentId='+this.employee.departmentId).then(res=>{
              if(res.data.code ==100){
                alert("员工新增成功");
              $('#emp-add-modal').modal("hide");
              }
           })
           this.changePage(this.msg.totalPages-1)

        },
        changePage(index){
           this.pageNo = index+1;
          // alert(this.pageNo)
           this.isequal = true
           if(this.pageNo ==1){
            this.getEmpList()
           }
           this.getEmpList()
        },
        get(index){
          this.index = index;
         // alert(this.index)
          this.emp = this.EmpList[index]
          this.department = this.emp.department
         console.log(this.emp)
          
        },
        updateEmployee(){
          console.log(this.emp.departmentId)
          console.log(this.emp)
          axios.put(url.updateEmp+this.emp.empId+'?empId='+this.emp.empId+'&empName='+this.emp.empName+'&empEmail='+this.emp.empEmail+'&gender='+this.emp.gender+'&departmentId='+this.emp.departmentId).then(res=>{
             if(res.data.code ==100){
                alert("员工更新成功");
              $('.emp-update-modal').modal("hide");
              }
          })
         
          this.changePage(0)
        },
        deleteEmp(){
          alert(this.emp.empId)
          if (confirm("确认删除【" + this.emp.empName+ "】的信息吗？")){
            alert('呜呜呜，请你再确认一下')
            axios.delete(url.deleteEmp+this.emp.empId).then(res=>{
              if(res.data.code ==100){
                alert("员工删除成功");
                this.changePage(0)
              }else{
                alert("员工删除异常，请再次尝试");
              }
            })
          }
        }

         },
      created(){
        this.getEmpList(),
        this.$eventHub.$on('DeptName',(data)=>{
        // console.log(data)
          this.deptName = data
          //console.log(this.deptName)
        })
      }
  }
</script>
<style>
  .hide{
    display: none;
  }
</style>