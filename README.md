# redux-maybe
Node.js Package for attaching callback functions to redux messages. 

redux-maybe is using [redux-observable](https://redux-observable.js.org/) to attach callbacks. It's basically an epic which listens for the "CALL_ME_MAYBE" action including a actiontype to listen for, a callback and a number of times to repeat the callback.

The name is designed to make Carly Rae Jepsens' hit song start playing in your brain everytime you use the package.

## Getting Started
Before you start using this package, you are advised to know you way around both [redux](https://redux.js.org/) and [redux-observables](https://redux-observable.js.org/).

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

//Import RXJS in order to make redux-observable happy
import 'rxjs';

const epicMiddleware = createEpicMiddleware(maybeEpic);

const store = createStore(myReducers,applyMiddleware(epicMiddleware));

store.dispatch(callMeMaybe("TEST_ACTION", () => console.log("CALLED_MAYBE"),1));
store.dispatch({type:"TEST_ACTION"});
```

```console
CALLED_MAYBE
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details