import { useState } from "react";
import "./App.css";
import ApplicationCard from "./components/ApplicationCard";


function App() { 
  const [applications, setApplications] = useState([]);

  

const [formData, setFormData] = useState({
  company: "",
  role: "",
  status: "Applied", 
  dateApplied: "",
  notes: "",
}); 

function handleChange(e) {
  setFormData({
    ...formData, 
    [e.target.name]: e.target.value
  });
}

const [editId, setEditId] = useState(null);


function handleSubmit(e) {
  e.preventDefault();

  if (editId !== null){
    //update existing application 
    setApplications(
      applications.map((app) =>
      app.id === editId ? {...app, ...formData} : app
    )
    );
    setEditId(null);
  } else{

    const newApplication = {
      id: Date.now(), 
      ...formData
     }; 
    setApplications([...applications, newApplication]); 
  }

  setFormData({
    company: "",
    role: "",
    status: "Applied", 
    dateApplied: "",
    notes: "",
  })
}

function handleDelete(id) {
  setApplications(applications.filter((app) => app.id !== id));
}




  return (
<div className = "App">
        <h1> 📋 Application Tracker </h1>
        <p> Quickly see the status of all your applications at a glance, edit entries as your process evolves, and never lose track of opportunities — perfect for staying organized and on top of your job or internship search. </p>

        <form onSubmit={handleSubmit} style={{ marginBottom: "24px"}}>
          <input 
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            required
            />

            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
              required
              />

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>

                <input
                  type="date"
                  name="dateApplied"
                  value={formData.dateApplied}
                  onChange={handleChange}
                  />

                  <button type="submit">Add Application</button>
            </form>
        
                <h2>Current Applications: </h2>



      {applications.map((app) => (
        <ApplicationCard key = {app.id} app = {app}
        onEdit={(app) => {
          setEditId(app.id);
          setFormData({
            company:app.company,
            role:app.role,
            status:app.status,
            dateApplied:app.dateApplied,
            notes:app.notes || "",
          });
        }}
        onDelete ={handleDelete}
            
      />
      ))}

    </div>

  );
}

export default App;