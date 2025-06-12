import { useState } from 'react';

const CRUD = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, { id: Date.now(), name: input }]);
    setInput('');
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container py-4">
      <h3>CRUD Page</h3>
      <div className="mb-3">
        <input
          className="form-control w-50"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new item"
        />
        <button className="btn btn-primary mt-2" onClick={addItem}>Add</button>
      </div>
      <ul className="list-group w-50">
        {items.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            {item.name}
            <button className="btn btn-sm btn-danger" onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUD;
