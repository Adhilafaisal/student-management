import commonApi from "./commonApi"
import { BASE_URL } from "./base_url"

export const registerData = async (data) => {
    return await commonApi("POST", `${BASE_URL}/registration`, data)
}

export const loginData = async () => {
    return await commonApi("GET", `${BASE_URL}/registration`,"")
}

export const studentData = async (data) => {
    return await commonApi("POST", `${BASE_URL}/add_student`, data)
}

export const setData = async () => {
    return await commonApi("GET", `${BASE_URL}/add_student`,"")
}
 
export const studentEdit = async (id) => {
    return await commonApi("GET", `${BASE_URL}/add_student/id`,{})
}

export const deleteStudent=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/add_student/${id}`,{})
   }

 
 



