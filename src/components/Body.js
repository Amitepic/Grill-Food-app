import Card from "./Card";
import { useState, useEffect } from "react";
import resList from "../utils/restdata";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
        // creating local state varible and passing the list of resList
        // creating setFIlter to modify state varible data
        
        const [filterData ,setFilterData]  = useState(resList);

        const [newSearchData, setnewSearchData] = useState(resList);
        // const [btnupdate ,setbtnupdate]  = useState("Top-rating");
        const [searchText ,setSearchText]  = useState('');
        // useEffect(() => {
        //     callingLiveApi();
        //  }, [])
        // const callingLiveApi = async () => {
        //     const dataFromLive = await fetch(
        //         'www.google.com'
        //     );

        //      const json = dataFromLive;
        //     console.log("done");

        //     filterData(json);
        // }
    

        const onlineStatus = UseOnlineStatus();

        if(onlineStatus == false){
            return(
                <>
                  <h1>you are offline</h1>                
                </>
               
                
            ) 
            
            
            
        }
        

    return (
        <div className='main-body'>
              <p className="error">No match found! try something else</p>
               <div className='search'>
                  <input type="text"  placeholder='Search what you want to eat' value={searchText} onChange={(e)=>{
                          setSearchText(e.target.value)
                  }}/>
                  <button className='btn'onClick={ () => {
                    console.log("searchbtn");
                     const filterSearchData= filterData.filter((restaurant) => restaurant.data.name.toUpperCase().includes(searchText.toUpperCase()))
                    // const filterSearchData = filterData.filter((restaurant) => {
                    //     if (restaurant.data.name.toUpperCase().includes(searchText.toUpperCase())) {
                    //       return restaurant.data.name;
                    //     } else {
                    //     //   alert("NO match found")
                        
                    //     console.log("no match foud")
                    //     return restaurant.data.name;
                    //     }
                    //   });
                    setnewSearchData(filterSearchData);
                    console.log(searchText);
                  }} >Seach</button>


                  <button className='btn' onClick={() => {
                         console.log("fitterbtn");
                        let filterNewdata = filterData.filter(
                            (restaurant) => restaurant.data.avgRating > 4.1
                        );
                        setnewSearchData(filterNewdata);
                                          
                  }}
                  >Top-rating</button>


<button className='btn' onClick={() => {
                         console.log("fitterbtn");
                        let filterNewdata = filterData.filter(
                            (restaurant) => restaurant.data.avgRating < 4.1
                        );
                        setnewSearchData(filterNewdata);
                                          
                  }}
                  >Down-rating</button>
               </div>
               <div className='card-container'>
            
                {newSearchData.map( (restaurant) => (
                    <Link   key={restaurant.data.id}  to = {'/rest/'+ restaurant.data.id }><Card resData={restaurant} /></Link>
                )) }             
                  

                   
               </div>
        </div>
    );
};

export default Body;