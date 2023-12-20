import React from "react"
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { AuthCheckAction } from "../redux/actions/auth.action";

const People = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      if (localStorage.getItem('tokenX')) {
        dispatch(AuthCheckAction ())
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <>People</>
}

export default People