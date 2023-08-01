import React, { useState, useEffect, } from "react";
import  { Link,useNavigate,useParams} from 'react-router-dom';

function Empedit() {
  const {empid} = useParams();
  const [id, idchange] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigate();


  useEffect(() => {
    fetch("http://localhost:8000/curddata/"+empid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        idchange(res.id);
        setName(res.name);
        setEmail(res.email);
        setPhone(res.phone);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

const handleSubmit = (e)=>{
e.preventDefault();
const empData= {id,name,email,phone}
 fetch("http://localhost:8000/curddata/"+empid,{
  method:"PUT",
  header:{"content-type":"application/json"},
  body:JSON.stringify(empData)
 }).then((res)=>{
  alert('Record inserted');
  navigation('/')
 }).catch((err)=>{
  console.log(err)
 })

}
  return (
    <div>
      <div className="row">
        <div className="container">
          <div className="card">
            <div className="card-title">
              <h2> Curd Operation</h2>
            </div>
            <div className="card-body">
              <div className="offset-lg-3 col-lg-6">
                <form onSubmit={handleSubmit}>
                  <div className="row" style={{ textAlign: "left" }}>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn btn-success m-2"> Add</button>
                        <Link to="/" className="btn btn-primary">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Empedit;
