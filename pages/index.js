import Head from 'next/head'
import Navbar from '../components/Navbar'
import Todo from '../components/Todo'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// Setup for Auth0:
// import { useUser } from '@auth0/nextjs-auth0';

import { table, minifyRecords } from './api/utils/Airtable'
// Context:
import { TodosContext } from '../contexts/TodosContext'
import { useEffect, useContext } from 'react'


// --------------------------------------------------
export default function Home({ initialTodos }) {
  // console.log(initialTodos, typeof initialTodos)

  // Setup for Auth0:
  // const { user, error, isLoading } = useUser();

  // Context, state:
  const { allData, setAllData } = useContext(TodosContext)
  // Set state to initial run data:
  useEffect(() => {
    setAllData(initialTodos)
  }, [])
  console.log('check whats in State todos at run:', allData);

  return (
    <div>
      <Head>
        <title>Data</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      <main>
        <h1>Display some data here:</h1>
        <br />
        <ul>
          {/* List all data using react context: */}
          {/* {initialTodos.map((todo) => (<Todo key={todo.id} todo={todo} /> ))} */}

          {allData && allData.map((data) => <Todo data={data} key={data.id} />)}
        </ul>
      </main>
    </div>
  )
}

// this function will run before default function:
export async function getServerSideProps(context) {
  try {
    const todos = await table.select({}).firstPage() // only first page - max nr rows 100?
    return {
      props: {
        initialTodos: minifyRecords(todos),
      },
    }
  } catch (err) {
    console.log(err)
    // res.status(500).json({ msg: 'Something went wrong' })
    return {
      props: {
        err: 'Something went wrong',
      },
    }
  }
}
