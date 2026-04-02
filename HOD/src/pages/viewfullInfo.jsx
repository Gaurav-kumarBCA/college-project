// import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// const ViewfullInfo = () => {
//   const pdfRef = useRef();
//   const [data, setData] = useState("");
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const url = import.meta.env.VITE_SERVER_URL;
//         const res = await fetch(`${url}/HOD/admissions/${id}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         const result = await res.json();
//         console.log(result);
//         console.log(result.data.percentage, " this is percentage");
//         setData(result?.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchUsers();
//   }, [id]);

//   const downloadPDF = async () => {
//     const pages = pdfRef.current.querySelectorAll(".page");
//     const element = pdfRef.current;
//     const canvas = await html2canvas(element, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");

//     const width = pdf.internal.pageSize.getWidth();

//     pdf.addImage(imgData, "PNG", 0, 0, width, 0);
//     pdf.save("admission-form.pdf");
//   };

//   if (!data) return <p>Loading...</p>;

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <button
//         onClick={downloadPDF}
//         className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
//       >
//         Download PDF
//       </button>

//       {/* FORM */}
//       <div
//         ref={pdfRef}
//         className="bg-white p-6 max-w-4xl mx-auto border text-[13px]"
//       >
//         {/* Header */}
//         <h2 className="text-center font-bold text-lg">
//           SHREE SATYA GROUP OF INSTITUTION
//         </h2>
//         <p className="text-center text-xs mb-4">Application Form</p>

//         {/* Top Fields */}
//         <div className="grid grid-cols-2 gap-4 border p-2 mb-4">
//           <p>
//             <b>Course Applied:</b> {data.courseAppliedFor}
//           </p>
//           <p>
//             <b>Form No:</b> {data.formNo || "______________________________"}
//           </p>
//           <p>
//             <b>College Name:</b> {data.collegeName}
//           </p>
//           <p>
//             <b>Student ID:</b>{" "}
//             {data.studentId || "______________________________"}
//           </p>
//         </div>

//         {/* Personal Info */}
//         <div className="space-y-2 mb-4 relative">
//           <p className="font-bold">
//             The application form should be filled by student along with
//             requisite fee & Self Attested copies of certificates must be
//             submitted to office of the institute by hand:
//           </p>
//           <p>
//             <b>Name:</b> {data.fullName}
//           </p>
//           <div className="w-full absolute  flex justify-end p-2">
//             <img
//               className="h-32 w-32 right-0 object-cover border"
//               src={`${data.documentImage?.photo}`}
//               alt="Student"
//             />
//           </div>
//           <p>
//             <b>Date of Birth:</b> {data.dob}
//           </p>
//           <p>
//             <b>Father Name:</b> {data.fatherName}
//           </p>
//           <p>
//             <b>Mother Name:</b> {data.motherName}
//           </p>
//           <p>
//             <b>Guardian's Name (if any):</b> {data.guardianName}
//           </p>
//           <p>
//             <b>Course applied for:</b> {data.courseAppliedFor}
//           </p>
//           <p>
//             <b>Postal Address (for all correspondence):</b> {data.postalAddress}
//           </p>
//           <p>
//             <b>Pin Code:</b> {data.pinCode}
//           </p>
//           <p>
//             <b>Permanent Address:</b> {data.permanentAddress}
//           </p>
//           <p>
//             <b>Phone:</b> {data.phoneN}
//           </p>
//           <p>
//             <b>Parent Phone No.:</b> {data.parentPhoneNO}
//           </p>
//         </div>

//         {/* Education Table */}
//         <h3 className="font-bold border-b pb-1 mb-2">
//           Educational Qualifications
//         </h3>

        // <table className="w-full border text-xs">
        //   <thead>
        //     <tr>
        //       <th className="border p-1">Exam</th>
        //       <th className="border p-1">Board/University</th>
        //       <th className="border p-1">School</th>
        //       <th className="border p-1">Roll No.</th>
        //       <th className="border p-1">Subject</th>
        //       <th className="border p-1">Marks Obtained</th>
        //       <th className="border p-1">Max Marks</th>
        //       <th className="border p-1">Percentage</th>
        //       <th className="border p-1">Passing Year</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <td className="border p-1">10th</td>
        //       <td className="border p-1">{data.highSchool.board}</td>
        //       <td className="border p-1">{data.highSchool.school}</td>
        //       <td className="border p-1">{data.highSchool.rollNo}</td>
        //       <td className="border p-1">{data.highSchool.subject}</td>
        //       <td className="border p-1">{data.highSchool.marksobtained}</td>
        //       <td className="border p-1">{data.highSchool.maxMarks}</td>
        //       <td className="border p-1">{data.highSchool.percentage}</td>
        //       <td className="border p-1">{data.highSchool.yearofPassing}</td>
        //     </tr>

        //     <tr>
        //       <td className="border p-1">12th</td>
        //       <td className="border p-1">{data.intermediate.board}</td>
        //       <td className="border p-1">{data.intermediate.school}</td>
        //       <td className="border p-1">{data.intermediate.rollNo}</td>
        //       <td className="border p-1">{data.intermediate.subject}</td>
        //       <td className="border p-1">{data.intermediate.marksobtained}</td>
        //       <td className="border p-1">{data.intermediate.maxMarks}</td>
        //       <td className="border p-1">{data.intermediate.percentage}</td>
        //       <td className="border p-1">{data.intermediate.yearofPassing}</td>
        //     </tr>

        //     <tr>
        //       <td className="border p-1">Graduation</td>
        //       <td className="border p-1">{data.graduation.board}</td>
        //       <td className="border p-1">{data.graduation.school}</td>
        //       <td className="border p-1">{data.graduation.rollNo}</td>
        //       <td className="border p-1">{data.graduation.subject}</td>
        //       <td className="border p-1">{data.graduation.marksobtained}</td>
        //       <td className="border p-1">{data.graduation.maxMarks}</td>
        //       <td className="border p-1">{data.graduation.percentage}</td>
        //       <td className="border p-1">{data.graduation.yearofPassing}</td>
        //     </tr>
        //   </tbody>
        // </table>

        {/* Other Details */}
        // <div className="mt-4 space-y-2">
        //   <p>
        //     <b>Category:</b> {data.documents.category}
        //   </p>
        //   <p>
        //     <b>Hostel Required:</b> {data.documents.hostel}
        //   </p>
        //   <p>
        //     <b>Aadhar Card No.:</b> {data.documents.aadharCard}
        //   </p>

        //   <p>
        //     <b>Transport:</b> {data.documents.transport}
        //   </p>
        //   <p>
        //     <b>Transport Address:</b>{" "}
        //     {data.documents.transportAddress
        //       ? `${data.documents.transportAddress}`
        //       : "___________________________"}
        //   </p>
        // </div>
      // </div>


//       <div>

//          <div className="w-[210mm] h-[297mm] mx-auto bg-white p-[10mm] break-after-page">
//           <img
//             src={data.documentImage.aadharCard}
//             className="w-full h-full object-contain border border-black"
//           />
//         </div>

//         <div className="w-[210mm] h-[297mm] mx-auto bg-white p-[10mm] break-after-page">
//           <img
//             src={data.documentImage.marksheet10}
//             className="w-full h-full object-contain border border-black"
//           />
//         </div>

//         <div className="w-[210mm] h-[297mm] mx-auto bg-white p-[10mm]">
//           <img
//             src={data.documentImage.marksheet12}
//             className="w-full h-full object-contain border border-black"
//           />
//         </div>
//         {/* <div>
//           <img
//             src={`${data.documentImage.aadharCard}`}
//             alt="Aadhar Card Image"
//           />
//         </div>

//         <div>
//           <img
//             src={`${data.documentImage.marksheet10}`}
//             alt="High School marksheet"
//           />
//         </div>
//         <div>
//           <img
//             src={`${data.documentImage.marksheet12}`}
//             alt="Intermediate marksheet"
//           />
//         </div> */}
//       </div>
//     </div>
//   );

// };

// export default ViewfullInfo;

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ViewfullInfo = () => {
  const pdfRef = useRef();
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/HOD/admissions/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const result = await res.json();
        setData(result?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [id]);

  const downloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const sections = pdfRef.current.querySelectorAll(".pdf-section");

    for (let i = 0; i < sections.length; i++) {
      const canvas = await html2canvas(sections[i], {
        scale: 2,
        useCORS: true, // Images load hone ke liye important hai
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Agar pehla page nahi hai toh naya page add karo
      if (i > 0) {
        pdf.addPage();
      }

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save(`admission-form-${data.fullName}.pdf`);
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button
        onClick={downloadPDF}
        className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg no-print"
      >
        Download Full 5-Page PDF
      </button>

      {/* Main Wrapper for PDF Content */}
      <div ref={pdfRef}>
        {/* PAGE 1: Personal Info & Education */}
        <div className="pdf-section bg-white p-10 w-[210mm] mx-auto border mb-4">
          <h2 className="text-center font-bold text-lg">
            SHREE SATYA GROUP OF INSTITUTION
          </h2>
          <p className="text-center text-xs mb-4">Application Form</p>

          <div className="grid grid-cols-2 gap-4 border p-2 mb-4">
            <p>
              <b>Course Applied:</b> {data.courseAppliedFor}
            </p>
            <p>
              <b>Form No:</b> {data.formNo || "_______"}
            </p>
            <p>
              <b>College Name:</b> {data.collegeName}
            </p>
            <p>
              <b>Student ID:</b> {data.studentId || "_______"}
            </p>
          </div>

          <div className="space-y-2 relative">
            <div className="absolute right-0 top-0">
              <img
                className="h-32 w-32 object-cover border"
                src={data.documentImage?.photo}
                alt="Student"
              />
            </div>
            <p>
              <b>Name:</b> {data.fullName}
            </p>
            <p>
              <b>DOB:</b> {data.dob}
            </p>
            <p>
              <b>Father:</b> {data.fatherName}
            </p>
            {/* ... Baki fields yahan add karein ... */}
            <p>
              <b>Mother Name:</b> {data.motherName}
            </p>

            <p>
              <b>Guardian's Name (if any):</b> {data.guardianName}
            </p>

            <p>
              <b>Course applied for:</b> {data.courseAppliedFor}
            </p>
            <p>
              <b>Postal Address (for all correspondence):</b>
              {data.postalAddress}
            </p>
            <p>
              <b>Pin Code:</b> {data.pinCode}
            </p>
            <p>
              <b>Permanent Address:</b> {data.permanentAddress}
            </p>
            <p>
              <b>Phone:</b> {data.phoneN}
            </p>
            <p>
              <b>Parent Phone No.:</b> {data.parentPhoneNO}
            </p>
          </div>

          <h3 className="font-bold border-b mt-6 mb-2">
            Educational Qualifications
          </h3>
          {/* <table className="w-full border text-[10px]"> */}
          {/* ... Aapka Table Code ... */}

          <table className="w-full border text-xs">
            <thead>
              <tr>
                <th className="border p-1">Exam</th>
                <th className="border p-1">Board/University</th>
                <th className="border p-1">School</th>
                <th className="border p-1">Roll No.</th>
                <th className="border p-1">Subject</th>
                <th className="border p-1">Marks Obtained</th>
                <th className="border p-1">Max Marks</th>
                <th className="border p-1">Percentage</th>
                <th className="border p-1">Passing Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1">10th</td>
                <td className="border p-1">{data.highSchool.board}</td>
                <td className="border p-1">{data.highSchool.school}</td>
                <td className="border p-1">{data.highSchool.rollNo}</td>
                <td className="border p-1">{data.highSchool.subject}</td>
                <td className="border p-1">{data.highSchool.marksobtained}</td>
                <td className="border p-1">{data.highSchool.maxMarks}</td>
                <td className="border p-1">{data.highSchool.percentage}</td>
                <td className="border p-1">{data.highSchool.yearofPassing}</td>
              </tr>

              <tr>
                <td className="border p-1">12th</td>
                <td className="border p-1">{data.intermediate.board}</td>
                <td className="border p-1">{data.intermediate.school}</td>
                <td className="border p-1">{data.intermediate.rollNo}</td>
                <td className="border p-1">{data.intermediate.subject}</td>
                <td className="border p-1">
                  {data.intermediate.marksobtained}
                </td>
                <td className="border p-1">{data.intermediate.maxMarks}</td>
                <td className="border p-1">{data.intermediate.percentage}</td>
                <td className="border p-1">
                  {data.intermediate.yearofPassing}
                </td>
              </tr>

              <tr>
                <td className="border p-1">Graduation</td>
                <td className="border p-1">{data.graduation.board}</td>
                <td className="border p-1">{data.graduation.school}</td>
                <td className="border p-1">{data.graduation.rollNo}</td>
                <td className="border p-1">{data.graduation.subject}</td>
                <td className="border p-1">{data.graduation.marksobtained}</td>
                <td className="border p-1">{data.graduation.maxMarks}</td>
                <td className="border p-1">{data.graduation.percentage}</td>
                <td className="border p-1">{data.graduation.yearofPassing}</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4 space-y-2">
            <p>
              <b>Category:</b> {data.documents.category}
            </p>
            <p>
              <b>Hostel Required:</b> {data.documents.hostel}
            </p>
            <p>
              <b>Aadhar Card No.:</b> {data.documents.aadharCard}
            </p>
            <p>
              <b>Transport:</b> {data.documents.transport}
            </p>
            <p>
              <b>Transport Address:</b>{" "}
              {data.documents.transportAddress
                ? `${data.documents.transportAddress}`
                : "___________________________"}
            </p>
          </div>
        </div>

        {/* PAGE 2: Undertaking & Declaration */}

        <div className="pdf-section bg-white p-10 w-[210mm] mx-auto border mb-4">
          <div>
            <div className="bg-white p-6 max-w-4xl mx-auto border text-[13px] leading-relaxed">
              {/* TOP TEXT */}
              <p>
                my son/daughter/ward __________ seeking admission in{" "}
                <b>SHREE SATYA GROUP OF INSTITUTION</b>. I will be personally
                responsible for:
              </p>

              <ol className="list-decimal ml-6 mt-2">
                <li>
                  His/her good conduct and behaviour during his/her stay at the
                  institute.
                </li>
                <li>Return of books issued to him/her by the institute.</li>
                <li>
                  Any other liabilities related to his/her at the institute.
                </li>
              </ol>

              <p className="mt-2">
                Further, I undertake to pay his/her fees, canteen dues, hostel
                dues and other expenses at the institute. I also agree that
                he/she shall abide by the rules & regulations of the institute.
              </p>

              {/* SIGNATURE SECTION */}
              <div className="flex justify-between mt-6">
                <div>
                  <p>Place: {data.parent.place}</p>
                  <p className="mt-2">Date: {data.parent.date}</p>
                </div>

                <div className="text-right">
                  <p>
                    Signature of Father/Mother/Guardian:{" "}
                    <img
                      className="h-12 "
                      src={`${data.documentImage?.parentSignature}`}
                      alt="Parent signature"
                    />
                  </p>
                  <p className="mt-2">Name: {data.parent.name}</p>
                  <p>Address: {data.parent.address}</p>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-center font-bold border inline-block px-4 py-1 mx-auto mt-6">
                Undertaking by the Applicant
              </h3>

              {/* DECLARATIONS */}
              <ol className="list-decimal ml-6 mt-4 space-y-2 text-justify">
                <li>
                  I declare that I have not been debarred from joining any
                  educational institution or restricted from the
                  institution/university/local/state.
                </li>

                <li>
                  I declare that all the statements made in application by me
                  are true to the best of my knowledge and belief. If any
                  information is found untrue, my admission shall stand
                  cancelled.
                </li>

                <li>
                  I have read the prospectus carefully and understood the
                  conditions of eligibility for the programme. If incorrect
                  information is found, my candidature can be cancelled at any
                  time.
                </li>

                <li>
                  I agree that admission may be granted to me on the conditions
                  stated in the latest prospectus prescribed by the university.
                </li>

                <li>
                  I shall abide by the rules, regulations and codes of conduct
                  prescribed by the institute and maintain discipline.
                </li>
              </ol>

              {/* SIGNATURE */}
              <div className="flex justify-between mt-10">
                <div>
                  <p>Name: {data.studentInfo.name}</p>
                  <p className="mt-2">Place: {data.studentInfo.place}</p>
                </div>

                <div className="text-right">
                  <p>
                    Signature of Applicant:{" "}
                    <img
                      src={`${data.documentImage?.studentSignature}`}
                      alt="Signature"
                      className="h-12 inline-block ml-2"
                    />
                  </p>{" "}
                  <p className="mt-2">Date: {data.studentInfo.date}</p>
                </div>
              </div>

              {/* OFFICE USE */}
              <div className="border rounded-2xl p-4 mt-8 w-[300px]">
                <p className="font-semibold">(For Office Use)</p>

                <p className="mt-2">Application received on: ____________</p>
                <p>Enclosures not attached: ____________</p>

                <p className="mt-2">Admission In-charge: ____________</p>
                <p>Eligible (Y/N): [ ]</p>
                <p>Checked by: ____________</p>
              </div>

              {/* FINAL SIGN */}
              <div className="text-right mt-10">
                <p>Signature of Director General</p>
              </div>
            </div>
          </div>

          {/* <h3 className="text-center font-bold border px-4 py-1 block mb-4">
            Undertaking by the Applicant
          </h3> */}
          {/* <p>I {data.fullName} hereby declare that...</p> */}
          {/* ... Declaration list ... */}
          {/* <div className="flex justify-between mt-10">
            <p>
              Signature of Applicant:{" "}
              <img
                src={data.documentImage?.studentSignature}
                className="h-10"
                alt="sign"
              />
            </p>
          </div> */}
        </div>

        {/* PAGE 3: Aadhar Card */}
        <div className="pdf-section w-[210mm] h-[297mm] mx-auto bg-white p-[10mm] border mb-4">
          <h4 className="text-center font-bold mb-2">Aadhar Card</h4>
          <img
            src={data.documentImage.aadharCard}
            className="w-full h-[80%] object-contain"
          />
        </div>

        {/* PAGE 4: 10th Marksheet */}
        <div className="pdf-section w-[210mm] h-[297mm] mx-auto bg-white p-[10mm] border mb-4">
          <h4 className="text-center font-bold mb-2">High School Marksheet</h4>
          <img
            src={data.documentImage.marksheet10}
            className="w-full h-[80%] object-contain"
          />
        </div>

        {/* PAGE 5: 12th Marksheet */}
        <div className="pdf-section w-[210mm] h-[297mm] mx-auto bg-white p-[10mm] border mb-4">
          <h4 className="text-center font-bold mb-2">Intermediate Marksheet</h4>
          <img
            src={data.documentImage.marksheet12}
            className="w-full h-[80%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewfullInfo;
