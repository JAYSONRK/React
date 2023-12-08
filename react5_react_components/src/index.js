import {createRoot} from 'react-dom/client';
import App from './App';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// React 18 depreciated ReactDOM.render
root.render(<App/>);