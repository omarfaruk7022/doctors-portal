import React from 'react';
import doctor from '../assets/images/doctor.png'
import bg from '../assets/images/appointment.png'
import PrimaryButton from './PrimaryButton';

const MakeAppointment = () => {
    return (
        <section
        
        style={{ 
            background:`url(${bg})`,
            }} className="flex justify-center  items-center">
            <div className="flex-1 hidden lg:block">
               <img className="mt-[-150px]" src={doctor} alt="" />
            </div>
            <div className="flex-1">
                <h2 className="text-primary text-xl">Appointment</h2>
                <h2 className="text-3xl text-white">Make an appointment Today</h2>
                <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
           <PrimaryButton >GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;