import axios from "axios"
import { useState, useEffect } from "react";
import { useFormik } from "formik";

export default function App() {

  let [students, setStudents] = useState();
  let formik = useFormik(
    {
      initialValues: {
        name: '',
        contactNumber: ''
      },
      onSubmit: (values) => {
        async function send_data(){
          try {
            let response = await axios.post("https://683410af464b49963601255b.mockapi.io/student", values)
            let temp = [...students, response.data];
            setStudents(temp)
          } catch (error) {
            
          }
        }
        send_data()
      }
    }
  )

  async function get_data() {
    try {
      let response = await axios.get("https://683410af464b49963601255b.mockapi.io/student");
      setStudents(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    get_data();
  }, [])


  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            id="contactNumber"
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Add Student"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          />
        </div>
      </form>

      {
        students && students.length > 0 ? students.map((student) => {
          return <h1 key={student.id}>{student.name}</h1>
        }) : <h1>Data Not Loaded</h1>
      }
    </div>
  )
}