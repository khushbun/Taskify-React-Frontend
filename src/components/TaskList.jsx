import { Link } from 'react-router-dom';

function TaskList({ tasks, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return <p className="text-muted">No records found.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Due</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>{task.priority}</td>
            <td>{task.status}</td>
            <td>{task.dueDate?.split('T')[0]}</td>
            <td>
              <Link to={`/tasks/${task._id}`} className="btn btn-sm btn-warning me-2">
                Edit
              </Link>
              <Link to={`/tasks/view/${task._id}`} className="btn btn-sm btn-info me-2">
                View
              </Link>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(task._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
