
const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
)

const table = base(process.env.AIRTABLE_TABLE_NAME)

// iterate thru array and get the mini version for each:
const minifyRecords = (records) => {
  return records.map((record )=> getMinifiedRecord(record))
}
// if returned data has no 'completed' fields:
const getMinifiedRecord = (record) => {
  if(!record.fields.completed) {
    record.fields.completed = false
  }
  return {
    id: record.id,
    fields: record.fields
  }
}

export { table, getMinifiedRecord, minifyRecords}