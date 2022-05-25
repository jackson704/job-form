import React, { useRef, useState, useEffect } from 'react'
import { IoIosCloseCircle } from "react-icons/io"
import { Button, Row, Col, InputGroup, FormControl, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableSection from './TableSection';
const Navbar = () => {
    let openForm = () => {
        let popupForm = document.querySelector(".popup-form");
        if (popupForm.classList.contains("translate-x-full")) {
            popupForm.classList.add("translate-x-0")
            popupForm.classList.remove("translate-x-full")
            popupForm.classList.remove("hidden");
            popupForm.classList.add("block");
        }
    }

    let closeForm = () => {
        let popupForm = document.querySelector(".popup-form");
        if (popupForm.classList.contains("translate-x-0")) {
            popupForm.classList.remove("translate-x-0")
            popupForm.classList.add("translate-x-full")
            popupForm.classList.add("hidden");
            popupForm.classList.remove("block");

        }
    }
    // const [first, setFirst] = useState()

    const ref = useRef();
    const [name, setName] = useState("");

    // if (inputEmail4 !== null) {
    //     console.log(inputEmail4);

    // }

    // let name1 = inputEmail4.ariaValueText
    // console.log(name1);


    let onSubmitValue = (e) => {
        // console.log(name1.value);

        let inputEmail4 = document.getElementsByName("position-title")[0].value;
        console.log(inputEmail4);
        setName(inputEmail4)
        // console.log(name);
        e.preventDefault()
    }



    // inputEmail4.forEach((value, index) => {
    //     let name1 = value.getAttribute("name");
    //     let title = name1.value;
    //     console.log(title);

    // })

    return (
        <>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#my-job" type="button" role="tab" aria-controls="my-job" aria-selected="true">My Job</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#all-jobs" type="button" role="tab" aria-controls="all-jobs" aria-selected="false">All Jobs</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#closed-jobs" type="button" role="tab" aria-controls="closed-jobs" aria-selected="false">Closed Jobs</button>


                    <button onClick={openForm} id='add-jobs' type="button" aria-selected="false">+ Add New Job</button>

                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="my-job" role="tabpanel" aria-labelledby="nav-home-tab">
                    <TableSection positionTitle={name} />
                </div>
                <div className="tab-pane fade" id="all-jobs" role="tabpanel" aria-labelledby="nav-profile-tab"></div>
                <div className="tab-pane fade" id="closed-jobs" role="tabpanel" aria-labelledby="nav-contact-tab"></div>
            </div>

            <div className='container container-fluid pb-8  w-3/5 popup-form hidden bg-slate-100 transition translate translate-x-full rounded-md form-container'>

                <div className='flex flex-row'>

                    <h1 id='job-heading' className='text-xl text-black mb-8'>Add Job</h1>
                    <IoIosCloseCircle className='close-circle' onClick={closeForm} />
                </div>

                <form className="row g-3" action='/' method='get'>
                    <div className="col-md-6">
                        {/* <label htmlFor="inputEmail4" className="form-label text-sm">Position Title <span className='text-red-600'>*</span></label>
                        <input type="text" className="form-control" id="inputEmail4" name='position-title' ref={ref} /> */}
                        <Form.Label htmlFor="inputEmail4">Position Title <span className='text-red-600'>*</span></Form.Label>
                        <Form.Group className="mb-3">

                            <Form.Control
                                id="inputEmail4"
                                aria-label="Username"
                                aria-describedby="basic-addon3"
                                name='position-title'
                                type='text'
                            // inputRef={(node) => { name1 = node }}
                            />
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label text-sm">Job Department</label>
                        <select id="inputState" className="form-select">
                            <option >Select...</option>
                            <option>Data Science</option>
                            <option>Big Data</option>
                            <option>Azure</option>
                            <option>DevOps</option>
                            <option>React JS</option>
                            <option>Ruby</option>
                            <option>Python</option>

                        </select>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label text-sm">Location <span className='text-red-600'>*</span></label>
                        <select id="inputState" className="form-select">
                            <option selected>Search for location ...</option>
                            <option>Jaipur</option>
                            <option>Mansarover</option>
                            <option>Delhi</option>
                            <option>Goa</option>
                            <option>Bihar</option>
                            <option>Ajmer</option>
                            <option>Jodhpur</option>
                            <option>Bikaner</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="userEmail" className="form-label text-sm">Where would you like to receive your applicants? <span className='text-red-600'>*</span></label>
                        <input type="email" className="form-control" id="userEmail" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description <span className='text-red-600'>*</span></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="skill-input" className="form-label text-sm">Must have skills <span className='text-red-600'>*</span></label>
                        <select id="skill-input" className="form-select">
                            <option >Select...</option>
                            <option>Data Science</option>
                            <option>Big Data</option>
                            <option>Azure</option>
                            <option>DevOps</option>
                            <option>React JS</option>
                            <option>Ruby</option>
                            <option>Python</option>

                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="linkedin-url" className="form-label text-sm">Linkedin URL</label>
                        <input type="url" className="form-control" id="linkedin-url" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="indeed-url" className="form-label text-sm">Indeed URL</label>
                        <input type="url" className="form-control" id="indeed-url" />
                    </div>
                    <div className="col-12">
                        <button onClick={onSubmitValue} className="btn btn-primary text-black hover:text-white" type='submit'>Create</button>
                    </div>


                </form>
            </div>



        </>
    )
}

export default Navbar   