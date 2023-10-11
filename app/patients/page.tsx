import { Patient, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Patient[]> {
    // Fetch data from your API here.
    return [
        {
            "id":1,
            "patientName": "Sarika",
            "birthDate": "24-03-1992",
            "disease": "Headache",
            "prescription": "",
            "age": "",
            "address": "",
            "phone": "",
            "maritalStatus": "",
            "gender": "Female"
           },
           {
            "id":2,
            "patientName": "Sarita",
            "birthDate": "24-03-1998",
            "disease": "Headache",
            "prescription": "",
            "age": "",
            "address": "",
            "phone": "",
            "maritalStatus": "",
            "gender": "Female"
           },
      // ...
    ]
  }

export default async function Page() {
    const data = await getData()
  return (
    <main>
        <h1 className="mb-2 mt-0 text-3xl font-small leading-tight text-primary">All Patients</h1>
        <div  className="text-center h-screen">
            <DataTable columns={columns} data={data} />
        </div>    
    </main>
  )
}
