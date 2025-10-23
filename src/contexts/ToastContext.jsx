import React, { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext({ show: (msg, type) => {} })

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const show = useCallback((message, type = 'info') => {
    const id = Date.now().toString(36)
    setToasts((t) => [...t, { id, message, type }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000)
  }, [])

  const remove = useCallback((id) => setToasts((t) => t.filter((x) => x.id !== id)), [])

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 60 }}>
        {toasts.map((t) => (
          <div key={t.id} style={{ marginTop: 8 }}>
            <div className={`toast toast-${t.type}`} role="status">
              {t.message}
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)

export default ToastContext
