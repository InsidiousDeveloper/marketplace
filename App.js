import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './src/redux/rootReducer'
import RootComponent, { CarStack } from './src/rootComponent'
import { NavigationContainer } from '@react-navigation/native'
import Information from './src/components/account/Information'
import Orders from './src/components/account/Orders'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
))

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Orders /> */}
        {/* <Information /> */}
        <RootComponent />
      </NavigationContainer>
    </Provider>
  )
}

export default App