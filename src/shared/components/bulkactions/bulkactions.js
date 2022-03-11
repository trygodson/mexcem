import React from 'react';
import './bulkactions.scss';

function BulkActions() {
  return <div className='dflex '>

    <select className='table-select' style={{ marginRight: 10 }}>
      <option value="delete">-Delete-</option>
      <option value="trash">-Trash-</option>
      <option value="remove">-Remove-</option>

    </select>

    <button className='bulk-action-button primary_span_text'>Apply</button>

  </div>;
}

export default BulkActions;
