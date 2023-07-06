import React, { useState } from 'react';

const Setting = () => {
  // State variables for user settings
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the user settings
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div>
      <h2 className="hidden md:block font-medium self-center text-xl sm:text-3xl text-gray-800">
        Here You can change your informations :
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-700 md:py-2 py-3 focus:outline-none focus:border-blue-400 mt-5"
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-700 md:py-2 py-3 focus:outline-none focus:border-blue-400 mt-5"
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-700 md:py-2 py-3 focus:outline-none focus:border-blue-400 mt-5"
          placeholder="Current Password"
        />
        <br />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-700 md:py-2 py-3 focus:outline-none focus:border-blue-400 mt-5"
          placeholder="New Password"
        />
        <br />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-700 md:py-2 py-3 focus:outline-none focus:border-blue-400 mt-5"
          placeholder="Confirm New Password"
        />
        <br />
        <br />
        <br />

        <button type="submit" className="haya">Save</button>
      </form>
    </div>
  );
};

export default Setting;
