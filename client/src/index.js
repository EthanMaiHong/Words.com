import ReactDOM from 'react-dom';
import ApolloProvider from './Apollo'
import * as serviceWorker from './serviceWorkerRegistration'

ReactDOM.render(ApolloProvider, document.getElementById('root'));

serviceWorker.unregister();
