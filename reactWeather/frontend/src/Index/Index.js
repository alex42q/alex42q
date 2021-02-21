import React, { Component } from 'react'
import axios from "axios"
import "./Index.css"

export default class Index extends Component {
    constructor(props){
        super(props)

        axios.get("http://localhost:5000/")
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        function getTime(){
            let date = new Date()
            let hours = date.getHours()
            let minutes = date.getMinutes()
            let seconds = date.getSeconds()
           
            setInterval(function(){
                let dayNight = document.getElementById("dayNight")
                let time = document.getElementById("time")
                seconds++
                if(seconds===60){
                    minutes++
                    seconds=0
                }else if(minutes===60){
                    hours++
                    minutes=0
                }else if(hours===24){
                    hours=0
                }else if(hours==6 && hours<12){
                    dayNight.textContent='Good Morning, Its Currently'
                }else if(hours>=12 && hours<17){
                    dayNight.textContent='Good Afternoon, Its Currently'
                }else if(hours>=17 && hours<22){
                    dayNight.textContent='Good Evening, Its Currently'
                }else if(hours>=22 && hours<6){
                    dayNight.textContent="Good Night, Its Currently"
                }
                time.textContent = hours + ":" + minutes + ":" + seconds
            },1000)
        }


        return (
            <div className='index'>
                <div className='index__container'>
                    <div className='index__texts'>
                        <h2 className='index__h2'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"</h2>
                        <h4 className='index__h4'>-Alex Zorb</h4>
                    </div>
                    <div className='index__clockContainer'>
                        <h2 className='index__h2' id='time'>{getTime()}</h2>
                        <h4 className='index__h4' id='dayNight'></h4>
                        <h3 className='index__h3' id='countryAndKey'></h3>
                    </div>
                </div>
            </div>
        )
    }
}
