import React from 'react'
import Chart from "react-google-charts";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue} from "firebase/database";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGraphData } from '../../redux/actions/loginRegisterActions';
import Loader from 'react-loader-spinner';
export const PerformanceChart = () => {
    const state = useSelector(state => state.userReducer);
    const [isReady, setisReady] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        const db = getDatabase();
        const totalUsersRef=ref(db,'users');
        var date=new Date();
        let tmpGraphData=[];
        let totalUsers=0;
        let totalSubmission=0;
        onValue(totalUsersRef,(snapshot)=>{
            
            // console.log(snapshot);
            snapshot.forEach((child)=>{
                totalUsers++;
                // console.log("hii");
            })
            //totalUsers=snapshot.getChildrenCount();
            // console.log(totalUsers);
           
        }, {
            onlyOnce: true
        })
        console.log(totalUsers);
        for(let i=0;i<30;i++)
        {
            const d=(date.getMonth()+1)+"/"+date.getDate()+
            "/"+date.getFullYear();
            let tmp=[];
            //firebase logic
            const avgCountRef = ref(db, 'average/' + btoa(d));
            onValue(avgCountRef, (snapshot) => {
                tmp.push(d);
                //console.log(tmp);
                const data = snapshot.val();
                if(data!=null)
                {
                    // console.log(data.totalsubmission);
                    totalSubmission=data.totalSubmission;
                    tmp.push(data.totalsubmission/totalUsers);
                }
                else{
                    tmp.push(0);
                    totalSubmission=0;
                }
            // console.log(btoa(d)); 
            },{
                onlyOnce: true
            });
            let userCount=0;
            // console.log(btoa(d));
            const userCountRef=ref(db,'submission/'+state.user.uid+'/'+btoa(d));
            onValue(userCountRef,(snapshot)=>{
                snapshot.forEach((child)=>{
                    userCount++;
                    // console.log(userCount);
                })
                tmp.push(userCount);
                
                    // setisReady(true);
            },{
                onlyOnce: true
            })
            if(i==0)
            {
                console.log(totalUsers);
            }
            setTimeout(()=>{
                console.log(totalSubmission);
                console.log(totalUsers);
                tmpGraphData.push([d,tmp[1],tmp[2]]);
                if(i==29)
                {
                    dispatch(setGraphData(tmpGraphData));
                }
            },5000)
            //console.log(tmp.length);
            date.setDate(date.getDate()-1);
        }
        console.log(tmpGraphData);
        setisReady(true);
    }, [])
    if(state.graphData.length===30 && state.graphData[0].length===3)
    {
        // console.log(state.graphData);
        const data=[['x','avg questions solved','question solved by you'],...state.graphData]
        // console.log("data to render is",data);
        return (
        
            <div>
                <Chart
                // width={"400px"}
                height={"400px"}
                chartType="LineChart"
                loader={<div>Comparision Chart</div>}
                // data={[
                //     ['x','avg questions solved','question solved by you'],
                //     // [0, 0, 0],
                //     // [1, 10, 5],
                //     // [2, 23, 15],
                //     // [3, 17, 9],
                //     // [4, 18, 10],
                //     // [5, 9, 5],
                //     // [6, 11, 3],
                //     // [7, 27, 19],
                //     ...graphData
                // ]}
                data={data}
                options={{
                    hAxis: {
                    title: 'date',
                    },
                    vAxis: {
                    title: 'no of questions',
                    }
                }}
                rootProps={{ 'data-testid': '2' }}
                />
            </div>
       
        )
    }
    else{
        // console.log(state.graphData[0]);
        return(
            <Loader/>
        )
    }
    
}
