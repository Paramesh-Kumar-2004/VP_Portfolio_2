import React from 'react'
import "../Styles/Certificate.css"
import FSD from "../Images/Certificates/FSD_With_AI_Tools.png"
import Python from "../Images/Certificates/Complete_Python.pdf"
import PythonDeveloper from "../Images/Certificates/Python_Developer.pdf"



const Certificates = () => {


    const certificateData = [
        {
            id: 1,
            certificate: "IITM Pravartak – Full Stack Development with AI Tools",
            authorize: "Guvi",
            duration: 'Aug 2025 – Nov 2025',
            source: FSD
        },
        {
            id: 2,
            certificate: "Python : Zero to Mastery",
            duration: 'Aug 2024 – Sep 2024',
            authorize: "Udemy",
            source: Python
        },
        {
            id: 3,
            certificate: "Software Development Intern",
            authorize: "NovaNectar Services Pvt. Ltd.",
            duration: 'Aug 2024 – Sep 2024',
            source: PythonDeveloper
        },
    ];
    return (
        <div id='Certificates'>
            <div>
                <h1 id='Title'>Certificates</h1>

                <div id='Cards'>
                    {certificateData.map((item) => (
                        <div key={item.id} className="Certificate-Item">
                            <div id='CertificateDetails'>
                                <h3 className='Certificate'>{item.certificate}</h3>
                                <p className="Duration"><b>Duration :</b> {item.duration}</p>
                                <p className="Authorize"><b>Authorized By :</b> {item.authorize}</p>
                                <span>
                                    <a href={item.source} target='_b' id='Source'>View Certificate</a>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Certificates