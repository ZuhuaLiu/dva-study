import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';

const extraReducers = {
  form(state = false, action) {
    switch (action.type) {
      case 'SHOW':
        return true;
      case 'HIDE':
        return false;
      default:
        return state
    }
  }
};

const onEffect = (effect, { put }, model, key) => {
  return function*(...args) {
    yield put({ type: 'SHOW' });
    yield effect(...args);
    yield put({ type: 'HIDE' });
  };
}

// 1. Initialize
const app = dva({
  history: createHistory(),
  onAction: createLogger(),
  extraReducers:extraReducers,
  onEffect: onEffect,
});

app.use(createLoading());
// 2. Plugins
// app.use({});

// 3. Model
// console.log('models',require('./models'));
// app.model(require('./models/counter').default);
// app.model(require('./models/example').default);
require('./models').default.forEach(key => app.model(key.default));

// console.log(require('./router'));
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
console.dir(app);
