import React, { useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import './Admin.scss';
import { RiCloseFill } from "react-icons/ri";

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { FiCalendar } from "react-icons/fi";
import { withFormik } from "formik";
const today = new Date();
export function Report(props) {

    const [selectedDate, setSelectedDate] = useState(null)
    // const [date, setDate] = useState()
    // console.log("date", date)
    return (
        <div className=''>
            <Modal className='report-statement'
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header className='main-profile-header'>
                    <Modal.Title id="contained-modal-title-vcenter" className='profile-header'>
                        <div className="header ">
                            <h1>Report & Statements</h1>
                        </div>
                        <div className="profile-btn">
                            <Button variant="danger" className='btn-sm' onClick={props.onHide}>Close</Button>

                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <form action=""> */}

                    <div className="row ">
                        <div className="col-md-3 report-section">
                            <label className='form-control-label'>Start Date
                                <DatePicker
                                    placeholderText='Start date'
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    dateFormat='yyyy/MM/dd'
                                    // dateFormat='MM/dd/yyyy'
                                    // minDate={new date()} 
                                    // maxDate={new date()} 
                                    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                                    isClearable
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                    className='form-control'
                                />
                                {/* <FiCalendar/> */}
                                {/* </DatePicker> */}
                            </label>
                            {/* <label className='form-control-label'>Start Date</label>
                            <input type="date" onChange={e => setDate(e.target.value)} className='form-control form-control-alternative' /> */}
                        </div>
                        <div className="col-md-3 report-section">
                            <label className='form-control-label'>End Date
                                <DatePicker
                                    placeholderText='End date'
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    dateFormat='yyyy/MM/dd'
                                    // dateFormat='MM/dd/yyyy'
                                    // minDate={new date()} 
                                    // maxDate={new date()} 
                                    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                                    isClearable
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                    className='form-control'
                                />
                            </label>
                        </div>
                        <div className="col-md-3 report-section">
                            <label className='form-control-label'>Select Report</label>
                            <select name="" id="" className="form-control form-select" aria-label="Default select example">
                                <option value="Success"> P&LSTATEMENT</option>
                            </select>
                        </div>
                        <div className="col-md-3 report-section">
                            <label className='form-control-label'>currency </label>
                            <select name="" id="" className="form-control form-select" aria-label="Default select example">
                                <option value="Success">INR</option>
                                <option value="Error">USD</option>
                            </select>

                        </div>
                    </div>
                    {/* </form> */}

                </Modal.Body>

                <Modal.Footer>

                    <Button variant="primary" size="sm">
                        Get Report
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>

    );
}
export default Report;


