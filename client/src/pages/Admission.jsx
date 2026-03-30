import React, { useState, useCallback } from "react";
import Layout from "../components/Layout";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import { CloudCog, MoveLeft } from "lucide-react";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const Admission = () => {
  const [formData, setFormData] = useState({
    courseAppliedFor: "",
    collegeName: "",
    fullName: "",
    dob: "",
    fatherName: "",
    motherName: "",
    guardianName: "",
    postalAddress: "",
    pinCode: "",
    permanentAddress: "",
    phoneNo: "",
    parentPhoneNo: "",
    studentPhoneNo: "",

    highSchool: {
      exam: "10th",
      board: "",
      school: "",
      rollNo: "",
      subject: "",
      marksobtained: "",
      maxMarks: 600,
      percentage: "",
      yearofPassing: "",
    },

    intermediate: {
      exam: "12th",
      board: "",
      school: "",
      rollNo: "",
      subject: "",
      marksobtained: "",
      maxMarks: 500,
      percentage: "",
      yearofPassing: "",
    },

    graduation: {
      exam: "Graduation",
      board: "",
      school: "",
      rollNo: "",
      subject: "",
      marksobtained: "",
      maxMarks: "",
      percentage: "",
      yearofPassing: "",
    },

    documents: {
      hostel: "No",
      aadharCard: "",
      transport: "No",
      transportAddress: "",
    },

    parent: {
      name: "",
      place: "",
      date: Date.now(),
      address: "",
    },

    finalStudentInfo: {
      name: "",
      place: "",
      date: Date.now(),
    },

    documentImage: {
      photo: null,
      marksheet10: null,
      marksheet12: null,
      aadharCard: null,
      studentSignature: null,
      parentSignature: null,
    },

    uploadStatus: {
      photo: "",
      marksheet10: "",
      marksheet12: "",
      aadharCard: "",
      studentSignature: "",
      parentSignature: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const preset = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors],
  );

  const handleNestedChange = useCallback(
    (e, section) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value,
        },
      }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors],
  );

  // education channge
  const handleEducationChange = useCallback((e, section) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const newSectionData = {
        ...prev[section],
        [name]: value,
      };

      // Auto-calculate percentage for marks
      if (name === "marksobtained" && value && prev[section].maxMarks) {
        const percentage = (
          (parseFloat(value) / parseFloat(prev[section].maxMarks)) *
          100
        ).toFixed(2);
        newSectionData.percentage = percentage;
      }

      return {
        ...prev,
        [section]: newSectionData,
      };
    });
  }, []);

  // document change
  const handleDocumentChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        documents: {
          ...prev.documents,
          [name]: value,
        },
      }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors],
  );

  // cloudinary file upload
  const uploadToCloudinary = useCallback(
    async (file, fieldName) => {
      console.log(file, cloudName, preset);
      if (!file || !cloudName || !preset) {
        console.error("Cloudinary config missing");
        return null;
      }

      const formDataToSend = new FormData();
      formDataToSend.append("file", file);
      formDataToSend.append("upload_preset", preset);
      formDataToSend.append("cloud_name", cloudName);

      try {
        setFormData((prev) => ({
          ...prev,
          uploadStatus: {
            ...prev.uploadStatus,
            [fieldName]: "uploading",
          },
        }));

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formDataToSend,
          },
        );

        if (!response.ok) {
          throw new Error(`Upload failed: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.secure_url) {
          setFormData((prev) => ({
            ...prev,
            documentImage: {
              ...prev.documentImage,
              [fieldName]: data.secure_url,
            },
            uploadStatus: {
              ...prev.uploadStatus,
              [fieldName]: "success",
            },
          }));
          return data.secure_url;
        } else {
          throw new Error("Upload failed - no secure URL");
        }
      } catch (error) {
        console.error("Upload error:", error);
        setFormData((prev) => ({
          ...prev,
          uploadStatus: {
            ...prev.uploadStatus,
            [fieldName]: "error",
          },
        }));
        return null;
      }
    },
    [cloudName, preset],
  );

  //  FILE UPLOAD HANDLER
  const handleFileChange = useCallback(
    async (e) => {
      const { name, files } = e.target;
      if (files[0]) {
        // Clear previous status
        setFormData((prev) => ({
          ...prev,
          uploadStatus: {
            ...prev.uploadStatus,
            [name]: "",
          },
        }));
        await uploadToCloudinary(files[0], name);
      }
    },
    [uploadToCloudinary],
  );

  const validateForm = () => {
    const newErrors = {};

    // Required student details
    const requiredFields = [
      "fullName",
      "dob",
      "fatherName",
      "motherName",
      "postalAddress",
      "pinCode",
      "courseAppliedFor",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] =
          `${field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} is required`;
      }
    });

    ["highSchool", "intermediate"].forEach((section) => {
      const sectionData = formData[section];
      if (
        !sectionData.board?.trim() ||
        !sectionData.marksobtained?.trim() ||
        !sectionData.yearofPassing?.trim()
      ) {
        newErrors[`${section}_required`] =
          `${section.replace(/([A-Z])/g, " $1").toUpperCase()} details are incomplete`;
      }
    });

    Object.keys(formData.documentImage).forEach((field) => {
      if (
        !formData.documentImage[field] &&
        formData.uploadStatus[field] !== "success"
      ) {
        newErrors[`${field}_upload`] =
          `${field.replace(/([A-Z])/g, " $1").toUpperCase()} upload required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill all required fields and complete uploads");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const url = import.meta.env.VITE_SERVER_URL;

      if (!token) {
        alert("Please login first");
        return;
      }

      const res = await fetch(`${url}/user/admission/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log(data, "this is data");

      if (res.ok && data.success) {
        alert("Form submitted successfully!");
        // Reset form
        setFormData({
          ...formData,
          documentImage: {
            photo: null,
            marksheet10: null,
            marksheet12: null,
            aadharCard: null,
            studentSignature: null,
            parentSignature: null,
          },
          uploadStatus: {
            photo: "",
            marksheet10: "",
            marksheet12: "",
            aadharCard: "",
            studentSignature: "",
            parentSignature: "",
          },
        });
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // only status
  const UploadStatus = ({ fieldName }) => {
    const status = formData.uploadStatus[fieldName];
    if (!status) return null;

    const statusClass = {
      uploading: "text-yellow-600 animate-pulse",
      success: "text-green-600",
      error: "text-red-600",
    };

    const statusText = {
      uploading: "Uploading...",
      success: " Uploaded",
      error: "Upload failed",
    };

    return (
      <div className={`text-xs mt-1 ${statusClass[status]}`}>
        {statusText[status]}
      </div>
    );
  };

  return (
    <Layout>
      {/* Back Button */}
      <Link
        to="/course"
        className="flex items-center gap-2 p-3 text-gray-600  hover:text-indigo-600 transition mb-6"
      >
        <MoveLeft size={20} />
        Back to Courses
      </Link>

      <div className="flex flex-col items-center bg-linearGray py-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Admission Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl p-8 rounded-2xl w-full max-w-4xl"
        >
          {/* student data */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-blue-200">
              Student Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Course Applied For *", name: "courseAppliedFor" },
                { label: "College Name", name: "collegeName" },
                { label: "Full Name *", name: "fullName" },
                { label: "Date Of Birth *", name: "dob", type: "date" },
                { label: "Father's Name *", name: "fatherName" },
                { label: "Mother's Name *", name: "motherName" },
                { label: "Guardian Name", name: "guardianName" },
                { label: "Postal Address *", name: "postalAddress" },
                { label: "Pin Code *", name: "pinCode", type: "number" },
                { label: "Permanent Address", name: "permanentAddress"},
                { label: "Phone Number", name: "phoneNo"},
                { label: "Parent Phone number", name: "parentPhoneNo"},
                // { label: "Permanent Address", name: "permanentAddress"},
                
              ].map(({ label, name, type }) => (
                <FormInput
                  key={name}
                  label={label}
                  name={name}
                  type={type}
                  value={formData[name] || ""}
                  required
                  onChange={handleChange}
                  error={errors[name]}
                />
              ))}
            </div>
          </section>

          {/* educational data */}
          {[
            {
              title: "High School (10th)",
              section: "highSchool",
              maxMarks: 600,
            },
            {
              title: "10+2 / Intermediate",
              section: "intermediate",
              maxMarks: 500,
            },
            {
              title: "Graduation (If Applicable)",
              section: "graduation",
              maxMarks: "",
            },
          ].map(({ title, section, maxMarks }) => (
            <section key={section} className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-green-200">
                {title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormInput
                  label="Board *"
                  name="board"
                  value={formData[section]?.board || ""}
                  onChange={(e) => handleEducationChange(e, section)}
                  error={errors[`${section}_required`]}
                />
                <FormInput
                  label="School/College"
                  name="school"
                  value={formData[section]?.school || ""}
                  onChange={(e) => handleEducationChange(e, section)}
                />
                <FormInput
                  label="Roll No"
                  name="rollNo"
                  value={formData[section]?.rollNo || ""}
                  onChange={(e) => handleEducationChange(e, section)}
                />
                <FormInput
                  label="Subject"
                  name="subject"
                  value={formData[section]?.subject || ""}
                  onChange={(e) => handleEducationChange(e, section)}
                />
                <FormInput
                  label="Marks Obtained *"
                  name="marksobtained"
                  type="number"
                  value={formData[section]?.marksobtained || ""}
                  onChange={(e) => handleEducationChange(e, section)}
                />
                <FormInput
                  label="Max Marks"
                  name="maxMarks"
                  type="number"
                  value={formData[section]?.maxMarks || maxMarks}
                  onChange={(e) => handleEducationChange(e, section)}
                />
                <FormInput
                  label="Percentage"
                  name="percentage"
                  value={formData[section]?.percentage || ""}
                  readOnly
                />
                <FormInput
                  label="Year of Passing *"
                  name="yearofPassing"
                  type="number"
                  value={formData[section]?.yearofPassing || ""}
                  onChange={(e) => handleEducationChange(e, section)}
                />
              </div>
            </section>
          ))}

          {/* document and facilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-purple-200">
              Documents & Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormSelect
                label="Hostel Required"
                name="hostel"
                options={["No", "Yes"]}
                value={formData.documents.hostel}
                onChange={handleDocumentChange}
              />
              <FormInput
                label="Aadhar Card No"
                name="aadharCard"
                value={formData.documents.aadharCard || ""}
                onChange={handleDocumentChange}
                error={errors.aadharCard}
              />
              <FormSelect
                label="Transport Required"
                name="transport"
                options={["No", "Yes"]}
                value={formData.documents.transport}
                onChange={handleDocumentChange}
              />
              <FormInput
                label="Transport Address"
                name="transportAddress"
                value={formData.documents.transportAddress || ""}
                onChange={handleDocumentChange}
              />
            </div>
          </section>

          {/* Parent information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-blue-200">
              Parent Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Name", name: "name" },
                { label: "Place", name: "place" },
                { label: "Date", name: "date", type: "date" },
                { label: "Address", name: "address" },
              ].map(({ label, name, type }) => (
                <FormInput
                  key={name}
                  label={label}
                  name={name}
                  type={type}
                  value={formData.parent[name] || ""}
                  onChange={(e) => handleNestedChange(e, "parent")}
                  error={errors[`parent_${name}`]}
                />
              ))}
            </div>
          </section>

          {/* Photo upload  */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-indigo-200">
              Upload Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Photo *", name: "photo" },
                { label: "10th Marksheet *", name: "marksheet10" },
                { label: "12th Marksheet *", name: "marksheet12" },
                { label: "Aadhar Card *", name: "aadharCard" },
                { label: "Student Signature *", name: "studentSignature" },
                { label: "Parent Signature *", name: "parentSignature" },
              ].map(({ label, name }) => (
                <div key={name} className="space-y-2">
                  <FormInput
                    label={label}
                    type="file"
                    name={name}
                    accept="image/*"
                    onChange={handleFileChange}
                    error={errors[`${name}_upload`]}
                  />
                  <UploadStatus fieldName={name} />
                  {formData.documentImage[name] && (
                    <div className="text-xs text-green-600 truncate max-w-full bg-green-50 p-2 rounded-lg">
                      <span className="font-medium">✓</span>
                      {typeof formData.documentImage[name] === "string"
                        ? formData.documentImage[name].split("/").pop()
                        : "File ready"}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ---------------- SUBMIT BUTTON ---------------- */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={loading}
              className={`px-12 py-4 text-lg font-bold rounded-2xl transition-all duration-300 flex items-center gap-2 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0"
              } text-white`}
            >
              {loading ? (
                <>
                  <CloudCog className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Admission;
