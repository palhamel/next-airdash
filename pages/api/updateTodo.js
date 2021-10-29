// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// UPDATE / PUT endpoint
// import helper function:
import { table, getMinifiedRecord } from './utils/Airtable'

export default async (req, res) => {
  // const body = req.body
  // const description = body.description
  // Destructuring:
  const { id, fields} = req.body

  try {
    const updatedRecord = await table.update([{ id, fields}])

   

    res.status(200).json(getMinifiedRecord(updatedRecord[0]))
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' })
  }
}
