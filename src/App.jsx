import { useFormik } from "formik"

export default function App(){
  let formik = useFormik(
    {
      initialValues: {
        username: '',
        password: ''
      },
      onSubmit: (values) => {
        console.log(values);
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