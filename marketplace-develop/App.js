import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './src/redux/rootReducer'
import RootComponent from './src/rootComponent'
import { NavigationContainer } from '@react-navigation/native'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
))

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootComponent />
      </NavigationContainer>
    </Provider>
  )
}

export default App