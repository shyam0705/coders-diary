import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { getDatabase, ref, query, orderByChild, onValue, orderByValue} from "firebase/database";
import { useEffect,useState } from 'react';
export const LeaderBoard = () => {
    const [leaderboardData, setleaderboardData] = useState([]);
    useEffect(() => {
        const db = getDatabase();
        const mostViewedPosts = query(ref(db, 'users'), orderByChild('total'));
        let tmpData=[]; 
        onValue(mostViewedPosts,(DataSnapshot)=>{
            DataSnapshot.forEach((data)=>{
                let obj={
                    name:data.val().email,
                    rank:0,
                    score:data.val().total
                }
                tmpData.push(obj);
            })
            tmpData=tmpData.reverse();
            let i=1;
            tmpData.forEach((data)=>{
                data.rank=i;
                i++;
            })
            console.log(tmpData);
            setleaderboardData(tmpData);
        })
    }, [])
    const columns = [{
        dataField: 'name',
        text: 'Name'
      }, {
        dataField: 'rank',
        text: 'Rank'
      }, {
        dataField: 'score',
        text: 'Total Questions Solved'
    }];     
    return (
       
        <BootstrapTable keyField='rank' caption={<CaptionElement />}  data={leaderboardData}
            columns={ columns } pagination={ paginationFactory() }  bordered={ false } 
            hover
        />
        
    )
}
const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', /* color: 'red',*/ padding: '0.5em' ,boxShadow:'white'}}>LeaderBoard</h3>; 

