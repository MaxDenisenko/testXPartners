import React, { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import "./css/reglog.css"
import { AuthLoginAction } from "../redux/actions/auth.action"

const RegLog = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLogin = useSelector(state=>state.auth.isLogin)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =(e) => {
        e.preventDefault()
        dispatch(AuthLoginAction(email, password))
    }
    
    if(isLogin) navigate('/people')
    return <>
        <div class="container">
            <div class="row">

                <div class="col-md-offset-3 col-md-6 cent">
                    <form class="form-horizontal" onSubmit={handleSubmit}>
                        <span class="heading">АВТОРИЗАЦИЯ</span>
                        <div class="form-group">
                            <input type="email" class="form-control" id="inputEmail" placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)}/>
                                <i class="fa fa-user"></i>
                        </div>
                        <div class="form-group help">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                                <i class="fa fa-lock"></i>
                        </div>
                        <div class="form-group">
                            
                            <button type="submit" class="btn btn-default">ВХОД</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </>
}

export default RegLog