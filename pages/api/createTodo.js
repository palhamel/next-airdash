// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// CREATE endpoint
// import helper function:
import { table } from './utils/Airtable'

export default async (req, res) => {
  // const body = req.body
  // const description = body.description
  // Destructuring:
  const { description } = req.body

  try {
    const createdRecords = await table.create([{ fields: { description } }])

    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields 
    }

    res.status(200).json(createdRecord)
    console.log('New record created');
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' })
  }
}
