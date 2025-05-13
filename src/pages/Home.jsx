import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../Api';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ status: '', priority: '' });

  const loadTasks = async () => {
    const res = await api.get('/tasks', { params: filters });
    setTasks(res.data.data);
  };

  useEffect(() => {
    loadTasks();
  }, [filters]);

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  };

  return (
    <>
      <Link to="/tasks/new" className="btn btn-success mb-3">+ New Task</Link>
      <TaskFilter filters={filters} onChange={setFilters} />
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </>
  );
}

export default Home;
