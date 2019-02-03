<template>
  <div>
	        <!-- 中间员工表格信息展示内容 -->
         <div class="emp_info col-sm-10">
                
            <div class="panel panel-success">
                <!-- 路径导航 -->
                <div class="panel-heading">
                  <ol class="breadcrumb">
                    <li><a href="#">部门管理</a></li>
                    <li class="active">部门信息</li>
                  </ol>
                </div>
                <!-- Table -->
                <table class="table table-bordered table-hover" id="emp_table">
                      <thead>
                          <th>部门编号</th>
                          <th>部门名称</th>
                          <th>部门老大</th>
                          <th>操作</th>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>CEO</td>
                              <td>马云</td>
                              <td>
                                 <a href="#" role="button" class="btn btn-primary dept_edit_btn" data-toggle="modal" data-target=".dept-update-modal">编辑</a>
                                    <a href="#" role="button" class="btn btn-danger dept_delete_btn">删除</a>
                              </td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>微信部</td>
                              <td>马化腾</td>
                              <td>
                                  <a href="#" role="button" class="btn btn-primary">编辑</a>
                                  <a href="#" role="button" class="btn btn-danger">删除</a>
                              </td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td>AI部</td>
                              <td>李彦宏</td>
                              <td>
                                  <a href="#" role="button" class="btn btn-primary">编辑</a>
                                  <a href="#" role="button" class="btn btn-danger">删除</a>
                              </td>
                          </tr>
                          <tr>
                              <td>4</td>
                              <td>人事部</td>
                              <td>Lily</td>
                              <td>
                                  <a href="#" role="button" class="btn btn-primary">编辑</a>
                                  <a href="#" role="button" class="btn btn-danger">删除</a>
                              </td>
                          </tr>
                          <tr>
                              <td>5</td>
                              <td>行政部</td>
                              <td>Tomato</td>
                              <td>
                                  <a href="#" role="button" class="btn btn-primary">编辑</a>
                                  <a href="#" role="button" class="btn btn-danger">删除</a>
                              </td>
                          </tr>
                      </tbody>
                  </table>

                  <div class="panel-body">
                      <div class="table_items">
                          当前第<span class="badge">1</span>页，共有<span class="badge">10</span>页，总记录数<span class="badge">100</span>条。
                      </div>
                      <nav aria-label="Page navigation" class="pull-right">
                        <ul class="pagination">
                          <li><a href="#">首页</a></li>
                          <li class="disabled">
                            <a href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li class="active"><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#">5</a></li>
                          <li>
                            <a href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                          <li><a href="#">尾页</a></li>
                        </ul>
                      </nav>
                  </div>
              </div><!-- /.panel panel-success -->
         </div><!-- /.emp_info -->
          <div class="modal fade dept-add-modal" tabindex="-1" role="dialog" aria-labelledby="dept-add-modal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">部门新增</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal add_dept_form">
                    <div class="form-group">
                        <label for="add_deptName" class="col-sm-2 control-label">部门名称</label>
                        <div class="col-sm-8">
                            <input type="text" name="deptName" class="form-control" id="add_deptName" placeholder="人事部">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="add_deptLeader" class="col-sm-2 control-label">部门老大</label>
                        <div class="col-sm-8">
                            <input type="text" name="deptLeader" class="form-control" id="add_deptLeader" placeholder="XXX">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary dept_save_btn">保存</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<div class="modal fade dept-update-modal" tabindex="-1" role="dialog" aria-labelledby="dept-update-modal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">部门更改</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal update_dept_form">
                    <div class="form-group">
                        <label for="update_deptName" class="col-sm-2 control-label">部门名称</label>
                        <div class="col-sm-8">
                            <input type="text" name="deptName" class="form-control" id="update_deptName">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="update_deptLeader" class="col-sm-2 control-label">部门老大</label>
                        <div class="col-sm-8">
                            <input type="text" name="deptLeader" class="form-control" id="update_deptLeader">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary dept_update_btn">保存</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
   </div>
</template>