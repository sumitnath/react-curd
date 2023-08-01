import React, {  useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
const Empcreate = () => {
  const[id,idchange] =useState("");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const navigation = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata= {id,name,email,phone}

    fetch("http://localhost:8000/curddata", {
     method:"POST",
     headers:{"content-type":"application/json"},
     body:JSON.stringify(empdata)
    }).then((res)=>{
            return res.json(); 
            })
      .then((res) => {
      alert('Record inserted')
     navigation('/')
      })
      .catch((err) => {
        console.log(err);
      });

  };
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
};

export default Empcreate;
