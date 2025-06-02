import axios from "axios";
import { useFormik } from "formik"

export default function App(){
  let formik = useFormik(
    {
      initialValues: {
        username: '',
        password: ''
      },
      onSubmit: (values) => {
        async function send_data(){
          let response = await axios.post("https://683410af464b49963601255b.mockapi.io/students", values);
          console.log(response)
        }
        send_data()
      }
    }
  );
  return(
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange}/>
        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
        <input type="submit"/>
      </form>
    </div>
  )
}