"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { sendMessage } from '@/api/sendMessage';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('*Required'),
    number: Yup.string().required('*Required'),
  message: Yup.string().required('*Required')
});
export default function FormBook() {
    return (<>
        <Formik
        initialValues={{ name: '', number: '', message:'' }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          sendMessage({ ...values }).then(date => {
            if (date === "Success") {
              return toast.success("Message has sent!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
            }
          } );
          setSubmitting(false);
          resetForm();
        }}
      >
        <Form className='flex flex-col bg-transparent' autoComplete="off">
          
            <label className='font-jomolhari font-normal text-lg' htmlFor='name'>Name</label>
            <Field className='bg-transparent py-3.5 pl-3  border-2 rounded border-white w-[308px] mb-3  focus:border-lime-900 focus:border-2 focus:outline-0' type="text" id="name" name="name" placeholder="Enter your name" />
            <ErrorMessage className='text-rose-600' name="name" component="div" />
          
             <label className='font-jomolhari font-normal text-lg' htmlFor='number'>Number</label>
            <Field className='bg-transparent py-3.5 pl-3  border-2 rounded border-white w-[308px] mb-3  focus:border-lime-900 focus:border-2 focus:outline-0'
            type="text"
            id="number"
                    name="number"
                    placeholder="+380__-___-__-__"
            />
            <ErrorMessage className='text-rose-600' name="number" component="div" />
          
              <Field className='py-3.5 pl-3 bg-transparent border-2 rounded border-white w-[308px] min-h-[100px] mb-3  focus:border-lime-900 focus:border-2 focus:outline-0' as="textarea" name="message" placeholder="Your message" />
                <ErrorMessage className='text-rose-600' name="message" component="div" />
          <button className='font-jomolhari font-normal text-base  py-4 px-12  bg-lime-900 rounded-lg hover:scale-105 focus:scale-105' type='submit'>Send</button>
        </Form>
      </Formik>
      <ToastContainer /> </>
    )
}