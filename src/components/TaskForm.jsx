import { useState, useEffect } from 'react';
import api from '../Api';
import { useNavigate, useParams } from 'react-router-dom';

function TaskForm({ isEdit }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    status: 'Pending'
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && id) {
      api.get(`/tasks/${id}`).then(res => setForm(res.data.data));
    }
  }, [isEdit, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await api.put(`/tasks/${id}`, form);
    } else {
      await api.post('/tasks', form);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="form-control mb-2" placeholder="Title" required value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })} />
      <textarea className="form-control mb-2" placeholder="Description"
        value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <input type="date" className="form-control mb-2" value={form.dueDate?.split('T')[0]}
        onChange={e => setForm({ ...form, dueDate: e.target.value })} />
      <select className="form-control mb-2" value={form.priority}
        onChange={e => setForm({ ...form, priority: e.target.value })}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      {isEdit && (
        <select className="form-control mb-2" value={form.status}
          onChange={e => setForm({ ...form, status: e.target.value })}>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      )}
      <button className="btn btn-primary">{isEdit ? 'Update' : 'Create'} Task</button>
    </form>
  );
}

export default TaskForm;
