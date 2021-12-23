import ReactDOM from 'react-dom'
import { App } from './App'
import { Workbox } from 'workbox-window'

console.log(process.env.NODE_ENV)

function createUIPrompt(opts: any) {
  if (confirm('A new update is available. Do you want to update now?')) {
    opts.onAccept()
  }
}

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js')

    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        console.log('Service worker activated for the first time!')
      }
      // if (confirm('update')) window.location.reload()
    })
    wb.register()
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
