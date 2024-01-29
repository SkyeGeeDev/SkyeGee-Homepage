import React, { ReactNode } from 'react'
import { Formik, Form, useField} from 'formik'
import * as Yup from 'yup';
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';

const MyTextInput = ({label, ...props } : {label : string; name: string; type: string; placeholder: string; id: string}) => {
  const [field, meta] = useField(props);
  return (
    <div className='py-4'>
      <label className='reg-text' htmlFor={props.id || props.name}>{label}</label>
      <input className='px-2 py-4 w-full rounded-lg outline-yellow' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({label, ...props } : {label: string; name: string; id: string; children: ReactNode}) => {
  const [field, meta] = useField(props);
  return (
    <div className='py-4'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className='cursor-pointer grid py-4 rounded-lg w-full outline-yellow' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({label, ...props} : {label: string; name: string; rows: number; placeholder: string; id: string }) => {
  const [field, meta] = useField(props);
  return (
      <div className='py-4'>
          <label htmlFor={props.id || props.name}>{label}</label>
          <textarea className="px-2 py-4 rounded-lg w-full outline-yellow" {...field} {...props} />
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}
      </div>
  );
};

const ContactMe = () => {
  return (
    <div className='flex flex-col py-10 px-8 mx-4 md:px-20 mb-8 bg-dblue rounded-xl border-2'>
      <div className='flex text-lg text-white font-bold'>
        SkyeGee Contact Form
      </div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            inquiry: '',
            message: ''
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required('Required'),
            email: Yup.string()
              .email('Invalid Email Address')
              .required('Please provide a valid Email Address'),
            inquiry: Yup.string()
              .oneOf(
                ['development', 'design', 'creation', 'moderation'],
                'Invalid Job Type'
              )
              .required('Please select a Job Type'),
            message: Yup.string()
                .min(10, "Please tell me a little bit about yourself!.")
          })}
          onSubmit={(values, actions) => {
            try {
              emailjs.send('service_afrc7a8', 'template_svcvx7s', values, 'dMLlGCylamGvHvhpD')
                .then(() => {
                  toast.success(`Thank you for your submission ${values.name}! I will reach back out to you shortly.`)
                  actions.setSubmitting(false);
                  actions.resetForm();
                });
              }
              catch {
                  toast.error(`Your form was not submitted. Please try again later.`);
                  actions.setSubmitting(false);
              }
            }
          }
        >
          <div className='flex flex-col text-center-4 justify-center rounded-lg text-dblue'>
            <Form>
              <MyTextInput
                label=''
                id=''
                name='name'
                type='text'
                placeholder='Your Name'
              />

              <MyTextInput
                label=''
                id=''
                name='email'
                type='email'
                placeholder='Email Address'
              />

              <MySelect label='' name='inquiry' id=''>
                <option disabled value="">Select a job type</option>
                <option value='development'>Front-End Development</option>
                <option value='design'>Figma Website Design</option>
                <option value='creation'>Discord Creation</option>
                <option value='moderation'>Discord Moderation</option>
              </MySelect>

              <MyTextArea
                label=''
                id=''
                name='message'
                rows={4}
                placeholder='Please tell me a little about yourself!'
              />

              <button className='bg-blue hover:bg-hblue rounded-lg p-4 text-white border-2' type='submit'>Submit</button>
            </Form>
          </div>
        </Formik>
      </div>
  )
}

export default ContactMe