import React, { useState } from "react";
// به زودی با ریجکس به روزرسانی  خواهد شد 
export default function InfoBox() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        note: "",
        address: {
        city: "",
        street: "",
        postalCode: "",
        country: "",
        },
    });

    const [errors, setErrors] = useState({});

    const handleFormData = (e) => {
        const { name, value } = e.target;
        if (["city", "street", "postalCode", "country"].includes(name)) {
        setFormData((prev) => ({
            ...prev,
            address: { ...prev.address, [name]: value },
        }));
        } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleErrors = () => {
        const newErrors = {};

        if (!formData.firstname || !formData.lastname) {
        newErrors.personinfo = "First name and last name are required.";
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
        if (!formData.email) {
        newErrors.email = "Email is required.";
        } else if (!emailPattern.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
        }

        const phonePattern = /^09(21|03|19|36)\d{7}$/;
        if (!formData.phoneNumber) {
        newErrors.phoneNumber = "Phone number is required.";
        } else if (!phonePattern.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Invalid phone number format.";
        }

        if (
        !formData.address.city ||
        !formData.address.street ||
        !formData.address.postalCode ||
        !formData.address.country
        ) {
        newErrors.address = "All address fields are required.";
        }

        return newErrors;
    };

    //این سابمیت برای تست درست شده به زودی با ریجکس این فرم تغییر خواهد یافت ...
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formErrors = handleErrors();
        if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        } else {
        setErrors({});
        console.log("Form Submitted Successfully:", formData);
        // Send data to the server or perform other actions
        }
    };

    return (
                <div className="flex flex-col w-full gap-y-4">
                <div>
                    <h3 className="text-nameSize text-textsColor-texts font-bold">Billing Info</h3>
                    <p className="text-[12px] text-textsColor-routeText">
                    Before you start trading for us, we need some basic information about
                    you.
                    </p>
                </div>

                <form onSubmit={handleSubmitForm} className="space-y-8">
                    {/* Name Fields */}
                    <div className="flex gap-8">
                    {["firstname", "lastname"].map((field) => (
                        <div key={field} className="flex flex-col w-full gap-y-[10px]">
                            <label
                                htmlFor={field}
                                className={`font-bold ${
                                errors.personinfo ? "text-red-500" : "text-textsColor-texts"
                                }`}
                            >
                                {errors.personinfo && field === "firstname"
                                ? "First name and last name are required."
                                : field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            <input
                                id={field}
                                name={field}
                                type="text"
                                value={formData[field]}
                                onChange={handleFormData}
                                className={`p-3 text-textsColor-texts text-[16px] font-medium  bg-componentBg-inputBg focus:border-[2px] outline-none rounded-[8px]  ${
                                errors.personinfo ? "border-red-500" : " border-btnColors-Mailblue "
                                }`}
                                placeholder={`Enter your ${field}`}
                            />
                        </div>
                    ))}
                    </div>

                    {/* Email and Phone Fields */}
                    <div className="flex gap-8">
                        <div className="flex flex-col w-full gap-y-[10px]">
                            <label
                                htmlFor="email"
                                className={`font-bold ${
                                    errors.email ? "text-red-500" : "text-textsColor-texts"
                                }`}
                                >
                                {errors.email || "Email"}
                            </label>
                            <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleFormData}
                            className={`p-3 text-textsColor-texts text-[16px] font-medium bg-componentBg-inputBg focus:border-[2px] outline-none rounded-[8px]  ${
                                errors.email ? "border-red-500" : " border-btnColors-Mailblue "
                                }`}
                            placeholder="Enter your email address"
                            />
                        </div>

                        <div className="flex flex-col w-full gap-y-[10px]">
                            <label
                            htmlFor="phoneNumber"
                            className={`font-bold ${
                                errors.phoneNumber ? "text-red-500" : "text-textsColor-texts"
                            }`}
                            >
                            {errors.phoneNumber || "Phone Number"}
                            </label>
                            <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            value={formData.phoneNumber}
                            onChange={handleFormData}
                            className={`p-3 text-textsColor-texts text-[16px] font-medium bg-componentBg-inputBg focus:border-[2px] outline-none rounded-[8px]  ${
                                errors.phoneNumber ? "border-red-500" : " border-btnColors-Mailblue "
                                }`}
                            placeholder="09..."
                            />
                        </div>
                    </div>

                        {/* Address Fields */}
                    <div className="flex flex-row gap-x-8">

                        {["city", "street"].map((field, idx) => (
                            <div key={idx} className="flex flex-col w-full gap-y-[10px]">
                                <label
                                    htmlFor={field}
                                    className={`font-bold ${
                                        errors.address ? "text-red-500" : "text-textsColor-texts"
                                    }`}
                                    >
                                    {errors.address || field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                id={field}
                                name={field}
                                type="text"
                                value={formData.address[field]}
                                onChange={handleFormData}
                                className={`p-3 text-textsColor-texts text-[16px] font-medium bg-componentBg-inputBg focus:border-[2px] outline-none rounded-[8px]  ${
                                    errors.address ? "border-red-500" : " border-btnColors-Mailblue "
                                    }`}
                                placeholder={`Enter your ${field}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row gap-x-8">

                        {["postalCode", "country"].map((field, idx) => (
                            <div key={idx} className="flex flex-col w-full gap-y-[10px]">
                                <label
                                    htmlFor={field}
                                    className={`font-bold ${
                                        errors.address ? "text-red-500" : "text-textsColor-texts"
                                    }`}
                                    >
                                    {errors.address || field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                id={field}
                                name={field}
                                type="text"
                                value={formData.address[field]}
                                onChange={handleFormData}
                                className={`p-3 text-textsColor-texts text-[16px] font-medium bg-componentBg-inputBg focus:border-[2px] outline-none rounded-[8px]  ${
                                    errors.address ? "border-red-500" : " border-btnColors-Mailblue "
                                    }`}
                                placeholder={`Enter your ${field}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Note */}
                    <div className="flex flex-col gap-y-[10px]">
                        <label htmlFor="note" className="font-bold text-textsColor-texts">
                            Note
                        </label>
                        <input
                            id="note"
                            name="note"
                            type="text"
                            value={formData.note}
                            onChange={handleFormData}
                            className={`p-3 w-full text-textsColor-texts text-[16px] font-medium bg-componentBg-inputBg focus:border-[2px] outline-none rounded-[8px] border-btnColors-Mailblue`}
                            placeholder="Additional notes..."
                        />
                    </div>

                    {/* دکمه سابمیت جهت تست  */}
                    {/* <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                    Submit
                    </button> */}
                </form>
                </div>
    );
}
