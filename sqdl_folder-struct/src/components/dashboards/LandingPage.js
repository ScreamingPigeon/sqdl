
import Student from './Student.js'
import Teacher from './Teacher.js'
import Admin from './Admin.js'
import { useContext, useState } from "react";
import StudentLandingPage from './studentLanding.js';
import React from 'react'

const LandingPage = ()=>{
    //cookie check
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    
    if (userData == null){
        window.location.href = '/login'
    }

    if (userData.type == 'admin'){
        console.log('Admin dashboard')
        return (<Admin/>)
    }    if (userData.type == 'student'){
        console.log('Student dashboard')
        return (<StudentLandingPage/>)
    }    if (userData.type == 'teacher'){
        console.log('Teacher dashboard')
        return (<Teacher/>)
    }

}

export default LandingPage