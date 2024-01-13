import React from "react";

class UserClass extends React.Component{


    constructor(props){

       super(props);
       this.state = {
        count:0,
        userInfo : {
            name:"dummyName",
            location: "dummyLocation",
            avatar_url :"https://www.shutterstock.com/image-vector/bearded-man-colorful-icon-design-1314451643",
        }
       }

       console.log(props);
    } 
    async componentDidMount() {
        const gitData = await fetch('https://api.github.com/users/amitepic');
        const json = await gitData.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);

    } 

    render(){

        const {login, avatar_url,location,public_repos} = this.state.userInfo;
        return(
            // const {Name,location} = this.props;  desturcting on fly
            <div className="UserClass">
                <img src={avatar_url} className="git-pic"/>
                <h1>Name : {login} </h1>
                <h3>Software Engineer</h3>
                <h3>Nagarro software</h3>
                <h3>{location}</h3>
                <h3>Repos: {public_repos}</h3>
                <span className="span">Follower:{this.state.count}</span>
                <button className="btn"  onClick={() =>{
                    console.log("click")
                        this.setState({
                        count: this.state.count + 1,
                        
                    });
                }}
                >Follow me</button>

                <button className="btn" onClick={() => {
                    console.log("click2")
                    if(this.state.count >= 1){
                        this.setState({
                            count: this.state.count - 1,
                        })
                    }
                }}>
                    Unfollow
                </button>
            </div>
        )
    }
}

export default UserClass;