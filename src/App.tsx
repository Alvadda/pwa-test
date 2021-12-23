import { useEffect, useState } from 'react'
import './style/style.scss'

export const App = () => {
  const [showUpdate, setShowUpdate] = useState<boolean>(false)

  useEffect(() => {
    // get called if a new service worker takes over and a refrash is needed to get the updates
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('new Service worker, pls reload')
      setShowUpdate(true)
    })
  }, [])

  const onRefrash = () => {
    setShowUpdate(false)
    window.location.reload()
  }

  return (
    <div className="main">
      <h1>PWA APP V16</h1>
      {showUpdate && (
        <div className="alert">
          <div className="alert-content">
            <p>New Version available</p>
            <button onClick={onRefrash}>Refrash</button>
          </div>
        </div>
      )}
    </div>
  )
}
