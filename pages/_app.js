// import '../styles/globals.css'

import '../styles/index.css'

// import { UserProvider } from '@auth0/nextjs-auth0';

import { TodosProvider } from '../contexts/TodosContext'

function MyApp({ Component, pageProps }) {
  return (
    // <UserProvider>

      <TodosProvider>
        <div className='container mx-auto my-10 max-w-7xl '>
          <Component {...pageProps} />
        </div>
      </TodosProvider>

    // </UserProvider>
  )
}

export default MyApp
