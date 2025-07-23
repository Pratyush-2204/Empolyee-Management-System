import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import {setLocalStorage, getLocalStorage } from "./utils/localStorage";
import {useState, useEffect } from "react";
import { useContext } from "react";
import {AuthContext} from "./context/AuthProvider";

const App = () => {

  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // }, );

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null) 
const authData = useContext(AuthContext)
// console.log(authData.employees)

// useEffect(() => {
//   if(authData){
//     const loggedInUser = localStorage.getItem('loggedInUser')
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//     }
//   }
// }, [authData])


const handleLogin = (email, password) => {
if(email == 'admin@me.com' && password == '123'){
  setUser('admin');
  localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
  // console.log(user)
}
// else if(authData && authData.employees){
  else if(authData && authData.employees){
    const employee = authData.employees.find(employee => 
      employee.email === email && employee.password === password
    );
    if(employee){
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
    }
  }
else(
  alert("invalid credentials")
)
}



// handleLogin();

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
