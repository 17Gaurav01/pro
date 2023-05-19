import React, { useState } from 'react';
import store from '../reducers/store';
import { useSelector, useDispatch } from 'react-redux';
import { enroll } from '../actions';

const DashboardPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const enrolledEntries = useSelector((state) => state.reducer.entries);
  console.log(
    "enrolledEntries",
    useSelector((state) => state)
  );
  const dispatch = useDispatch();

  const handleEnroll = () => {
    dispatch(enroll(name, age));
    setName("");
    setAge("");
    console.log(name);
    console.log(age);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleEnroll}>Enroll</button> // Add the onClick event
        handler here
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {enrolledEntries && enrolledEntries.map((entry, index) => (
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
