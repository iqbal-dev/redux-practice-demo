import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchData} from './../redux/user/userAction'

const UserData = ({userData,fetchData}) => {
    useEffect(() => {
        fetchData()
    },[])
    return (
        userData.loading ? (<h2>Loading</h2>) :
            userData.error ? (<h2>{userData.error}</h2>) :
                (
                    <div>
                        <h2>User Data
                         <div>
                                {userData && userData.users && userData.users.map(user => 
                                    <p>{ user.name }</p>
                                )}
                         </div>
                        </h2>
                    </div>
                )
                
            
    );
};

const mapStateToProps = state => {
    return {
        userData:state.users
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserData);