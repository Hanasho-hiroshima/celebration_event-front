import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export const ConvertedToastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={8000}
      style={{ width: 'auto' }}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  )
}
