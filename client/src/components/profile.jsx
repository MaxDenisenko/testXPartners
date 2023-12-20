import React from "react"
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { AuthCheckAction } from "../redux/actions/auth.action";

const Profile = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('tokenX')) {
          dispatch(AuthCheckAction ())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    return <>profile</>
}

export default Profile