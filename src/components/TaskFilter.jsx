function TaskFilter({ filters, onChange }) {
    return (
      <div className="d-flex gap-2 mb-3">
        <select className="form-select" value={filters.status} onChange={e => onChange({ ...filters, status: e.target.value })}>
          <option value="">All Status</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
        <select className="form-select" value={filters.priority} onChange={e => onChange({ ...filters, priority: e.target.value })}>
          <option value="">All Priorities</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
    );
  }
  
  export default TaskFilter;
  