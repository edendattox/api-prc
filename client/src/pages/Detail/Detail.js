import React, { useEffect, useState } from "react";
import { Container } from "./styles";

const Detail = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/user/currentuser`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
        console.log("error fetching user data");
      }
    };

    getUserData();
  }, []);

  return (
    <Container>
      {data && (
        <div>
          (
          <div
            style={{
              marginTop: "200px",
              backgroundColor: "#24A19C",
              padding: "20px",
              borderRadius: "30px",
              color: "white",
              minWidth: "200px",
              width: "50vw",
              maxWidth: "800px",
            }}
          >
            Name: {data.currentUser.firstname} {data.currentUser.lastname}
          </div>
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#24A19C",
              padding: "20px",
              borderRadius: "30px",
              color: "white",
              minWidth: "200px",
              width: "50vw",
              maxWidth: "800px",
            }}
          >
            Phone: {data.currentUser.phone}
          </div>
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#24A19C",
              padding: "20px",
              borderRadius: "30px",
              color: "white",
              minWidth: "200px",
              width: "50vw",
              maxWidth: "800px",
            }}
          >
            Email: {data.currentUser.email}
          </div>
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#24A19C",
              padding: "20px",
              borderRadius: "30px",
              color: "white",
              minWidth: "200px",
              width: "50vw",
              maxWidth: "800px",
            }}
          >
            Address: {data.currentUser.address}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Detail;
