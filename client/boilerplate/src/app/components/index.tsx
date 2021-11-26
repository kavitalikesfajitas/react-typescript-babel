import React from 'react';
import { render } from 'react-dom';
import TestApp from './TestComponent';

const App: React.FC = () => {
    return <TestApp />;
};

render(<App />, document.getElementById('root'));
