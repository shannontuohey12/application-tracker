function ApplicationCard({app, onEdit, onDelete}){
    return (
        <div className = "card">
          <h3>{app.company}</h3>
          <p>{app.role}</p>

        

          <p>Applied: {app.dateApplied}</p>

            <span className ={`status ${app.status}`}>
            {app.status}
          </span>

          <button1 onClick={() => onEdit(app)}>Edit</button1>

          <button1
            onClick={() => onDelete(app.id)}>Delete</button1>
        </div>
    );
}

export default ApplicationCard;