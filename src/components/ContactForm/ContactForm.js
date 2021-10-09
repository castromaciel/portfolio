import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import './contactForm.css'
import swal from 'sweetalert';

function ContactForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: { name: "", email: "", subject:"", message:"" } })

  const form = useRef();
  
  const onSubmit = (data) => {
    console.log(data)
    if(data){
      // console.log(form.current)
      emailjs.sendForm("service_r13vctf","portfolio_template", form.current, 'user_JxofNhNDKfx8Q6mKl2CRl')
      .then((result) => {
        // console.log(result.text)
        swal("Good job!", "You clicked the button!", "success");
        reset();
      },
      (error) => {
        console.log(error.text)
      });
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center">
      <h2 className="mt-5 pt-4 pt-md-5 mb-3 title mx-auto title">Contact</h2>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="row pt-2 mx-auto mb-3">
          <div className="col-8 form-group mx-auto">
            <h5 className="ps-2">Name</h5>
            <input {...register("name",{
              required: true,
              maxLength: 30,
              minLength: 5,
              pattern: /^[A-Za-z ]+$/i
            })} 
            className="form-control" placeholder=" Name" name="name"/>
            {errors?.name?.type === "required" && <span className="requiredData">This field is required</span>}
            {errors?.name?.type === "minLength" && <span className="requiredData">First name must be 5 characters or more</span>}
            {errors?.name?.type === "maxLength" && <span className="requiredData">First name cannot exceed 30 characters</span>}
            {errors?.name?.type === "pattern" && <span className="requiredData">Alphabetical characters only</span>}
          </div>
          <div className="col-8 form-group mx-auto pt-2">
            <h5 className="ps-2">Email address</h5>
            <input {...register("email",{
              required: true,
              maxLength: 30
            })}
            type="email" className="form-control" placeholder="example@mail.com" name="email" />
            {errors?.email?.type === "required" && <span className="requiredData">This field is required</span>}
            {errors?.email?.type === "maxLength" && <span className="requiredData">Email cannot exceed 30 characters</span>}
          </div>
          <div className="col-8 form-group mx-auto pt-2">
            <h5 className="ps-2">Subject</h5>
            <input {...register("subject",{
              required: true,
              maxLength: 30
            })}
            type="text" className="form-control" placeholder="Subject" name="subject" />
            {errors?.subject?.type === "required" && <span className="requiredData">This field is required</span>}
            {errors?.subject?.type === "maxLength" && <span className="requiredData">Subject cannot exceed 15 characters</span>}
          </div>
          <div className="col-8 form-group mx-auto pt-2">
            <h5 className="ps-2">Message</h5>
            <textarea className="form-control" id="" cols="20" rows="6" placeholder="Your message" name="message" {...register("message",{
              required:true,
              minLength: 5
            })}></textarea>
            {errors?.message?.type === "required" && <span className="requiredData">This field is required</span>}
            {errors?.message?.type === "minLength" && <span className="requiredData">Your message must be 6 characters</span>}
          </div>
          <div className="col-8 form-group mx-auto py-2 mb-3">
            <input type="submit" className="btn btn-dark" value="Send Message"></input>
          </div>
        </div>
      </form>
    </div>
  )
  }

export default ContactForm
