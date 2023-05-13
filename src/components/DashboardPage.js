import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enroll } from '../actions';

const DashboardPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const enrolledEntries = useSelector((state) => state.entries);
  const dispatch = useDispatch();

  const handleEnroll = () => {
    // Perform enroll logic here
    // Dispatch an action to update Redux state if needed
    dispatch(enroll(name, age));
    setName('');
    setAge('');
  };

  return (
    <div>
      <div>
        {/* Left side options */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleEnroll}>Enroll</button>
      </div>
      <div>
        {/* Right side table */}
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {enrolledEntries.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
