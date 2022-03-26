import React, { useEffect } from "react";
import NavbarVisit from "../Navbar/NavbarVisitante/NavbarVisit";
//redux
// import { fetchAllUsers } from "../../Slices/Users/userSlices";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {

  // const { list: Users } = useSelector((state) => state.users);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllUsers());
  // }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {/* {Users.map((user, index) => {
          return (
            <div key={index} className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={user.avatar} alt="avatar" />
                <div className="card-body">
                  <h5 className="card-title">
                    {user.first_name} {user.last_name}
                  </h5>
                  <p className="card-text">{user.email}</p>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default UserList;
