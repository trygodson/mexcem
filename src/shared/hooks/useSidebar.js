import React, { useState } from 'react';

function useSidebar(initialValue) {
  const [cols, setCols] = useState(initialValue);
  return [cols, setCols];
}

export { useSidebar };
