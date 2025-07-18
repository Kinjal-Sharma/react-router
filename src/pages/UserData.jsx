import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import "./Movie.css";

export const Movie = () => {
    const users = useLoaderData();
    const [selectedUser, setSelectedUser] = useState("");

    const handleUserData = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="user-listings">
            <div className="users">
                <h1>User List</h1>
                <div className="container grid grid-three--cols">
                    {users.map(user => (
                        <div key={user.id} className="user-card">
                            <img
                                src={`https://randomuser.me/api/portraits/lego/${user.id}.jpg`}
                                alt={selectedUser.name}
                                className="user-image"
                            />
                            <p className="details-header">Name: {user.name}</p>
                            <p>Role: Backend Developer</p>
                            <button onClick={() => handleUserData(user)}>Show User Details</button>
                        </div>
                    ))}</div>
            </div>
            <div className="user-info">
               
                {selectedUser && (
                    <div className="user-card">
                         <h1 style={{paddingBottom:"60px"}}>User Info</h1>
                        <img
                            src={`https://randomuser.me/api/portraits/lego/${selectedUser.id}.jpg`}
                            alt={selectedUser.name}
                            className="user-image"
                        />
                        <div className="user-details">
                            <div className="details-header">{selectedUser.name}</div>
                            <p>Email: {selectedUser.email}</p>
                            <p>City: {selectedUser.address?.city}</p>
                            <p>Phone: {selectedUser.phone}</p>
                            <p>Website: {selectedUser.website}</p>
                            <p>Company: {selectedUser.company?.name}</p>
                        </div>
                    </div>
                )}</div>
        </div>

    );
};

