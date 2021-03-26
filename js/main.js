const btnRed = document.querySelector('#btn-red')
const btnGreen = document.querySelector('#btn-green')
const body = document.querySelector('body')

const initState = {
  color: '#5f0000'
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'changeColor':
      return {
        color: action.payload
      }
    default:
      return state
  }
}

const store = Redux.createStore(reducer, Redux.compose(
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const fn = () => {
  const state = store.getState()
  body.style.backgroundColor = state.color
}

store.subscribe(fn)

btnRed.addEventListener('click', () => {
  store.dispatch({
    type: 'changeColor',
    payload: '#5f0000'
  })
})

btnGreen.addEventListener('click', () => {
  store.dispatch({
    type: 'changeColor',
    payload: '#005f00'
  })
})

store.dispatch({ type: '@@INIT' })
