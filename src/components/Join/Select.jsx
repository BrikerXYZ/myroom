import React from 'react';

const Select = ({ state }) => {
  return (
    <select
      className='role-selector'
      value={state.role}
      name='Choose Roles'
      onChange={(e) => state.setRole(e.target.value)}
    >
      <option value='listener'>Pendengar</option>
      <option value='speaker'>Pembicara</option>
      <option value='moderator'>HOST</option>
    </select>
  );
};

export default Select;
