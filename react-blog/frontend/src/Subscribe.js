import e from 'cors'
import React, { useState, useEffect, setState } from 'react'
import axios from "./axios"
import "./Subscribe.css"
import { useForm } from "react-hook-form"


function Subscribe() {
const {register, handleSubmit } = useForm();

const onSubmit = (values) => axios.post("/subscribe-form", values)

    return (
        <div className="sub">
            <div className="subRowHeader">
                <div className="subColumnHeader">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="subHeader">
                        <h4 className="subH4">Subscribe</h4>
                    </div>
                    <div className="subRow">
                        <div className="subColumn">
                            <div className="subP">
                                <p className="subPar">Enter your e-mail below and get notified on the latest blog posts.</p>
                            </div>
                            <div className="subInput">
                                <input ref={register} id="sub" name="email" className="subInputText" type="email" placeholder="Enter your email"></input>
                            </div>
                            <div className="subButton">
                                <input type="submit" placeholder="submit" value="Subscribe" className="subButtonInput"></input>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
