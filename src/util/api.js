
let url = {
  getEmpById:'/emp/getEmpById/',
  getEmpList: '/emp/getEmpList?pageNo=',
  checkEmpName: '/emp/checkEmpName?empName=',
     addEmp  :  '/emp/addEmp?empName=',
     updateEmp   :'/emp/updateEmp/',
     deleteEmp:'/emp/deleteEmp/',
  getTotalPages:  '/emp/getTotalPages',
  getDeptName: '/dept/getDeptName'
}

let host = 'http://localhost:8082/hrms'
for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}
//http://localhost:8082/hrms/emp/deleteEmp/10
export default url