import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Curddata = () => {
  const [empdata, setEmpData] = useState();
  const navigate = useNavigate();

  const loadcontent = (id) => {
    navigate("/empdata/" + id);
  };
  const deletecontent = (id) => {
    if (window.confirm("Do you wanted to delete")) {
      fetch("http://localhost:8000/curddata/" + id, {
        method: "DELETE"
      }).then((res) => {
          alert("Record Deleted");
          navigate("/");
          window.location.reload(false);
        }).catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:8000/curddata")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setEmpData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="container">
          <div className="card">
            <div className="card-title">
              <h2> React Curd Operation</h2>
            </div>
            <div className="card-body">
              <Link to="/empadd" className="btn btn-success mb-3 text-left">
                Add New (+)
              </Link>
              <table className="table table-bordered">
                <thead className="table-primary text-white ">
                  <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {empdata &&
                    empdata.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                          <a onClick={() => loadcontent(item.id)}
                            className="btn btn-primary"
                          >
                            Edit
                          </a>
                          <a onClick={() => deletecontent(item.id)}
                            className="btn btn-secondary"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curddata;
