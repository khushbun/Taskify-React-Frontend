import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../Api';

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/tasks/${id}`)
      .then(res => setTask(res.data.data))
      .catch(() => setError('Task not found'));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!task) return <p>Loading...</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p><strong>Description:</strong> {task.description || 'N/A'}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Due Date:</strong> {task.dueDate?.split('T')[0]}</p>
      <p><strong>Created At:</strong> {new Date(task.createdAt).toLocaleString()}</p>
      <Link to={`/tasks/${task._id}`} className="btn btn-warning mt-3">Edit Task</Link>
    </div>
  );
}

export default TaskDetails;
