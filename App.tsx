import * as React from 'react';
import './style.css';
import { Button } from 'antd';
import { StructuredQuery } from './src/StructuredQuery';

export default function App() {
  return (
    <div>
      <h1>
        ANTD + REACT + TS!<Button>HELLO</Button>
      </h1>

      <StructuredQuery />
    </div>
  );
}
