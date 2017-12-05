# redux-maybe
Nodejs Package for attaching callback functions to redux messages. 

redux-maybe is using [redux-observable](https://redux-observable.js.org/) to attach callbacks. It's basically and epic which listen for the "CALL_ME_MAYBE" message including a messagetype to listen for, a callback and a number of times to repeat the callback.

The name is designed to make Carly Rae Jepsens' hit song start playing in your brain everytime you use the package.

## Getting Started

### Installing
To install the package
```
npm install --save redux-maybe
```

## Usage
```js
import { myReducers }             from './myReducers';

import { createStore }            from 'redux';
import { createEpicMiddleware }   from 'redux-observable';
import { maybeEpic, callMeMaybe } from 'redux-maybe';

import 'rxjs';

const epicMiddleware = createEpicMiddleware(maybeEpic);

const store = createStore(myReducers,applyMiddleware(epicMiddleware));

store.dispatch(callMeMaybe("TEST_ACTIN", () => console.log("CALLED MAYBE"),1));
store.dispatch({type:"TEST_ACTION"});
```

```console
CALLED_MAYBE
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details