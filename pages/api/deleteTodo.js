// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// DELETE endpoint
// import helper function:
import { table, getMinifiedRecord } from './utils/Airtable'

export default async (req, res) => {
  // const body = req.body
  // const description = body.description
  // Destructuring:
  const { id } = req.body

  try {
    const deletedRecords = await table.destroy([id])

    res.status(200).json(getMinifiedRecord(deletedRecords[0]))
    console.log('Deleted records id:', deletedRecords[0].id);
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: 'Something went wrong' })
  }
}
