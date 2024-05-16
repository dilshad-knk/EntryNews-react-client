import React from "react";

const Input = ({ label, type, id, placeholder, register, errors, setValue, trigger, rows, name }) => {

    const handleChange = (e) => {
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setValue(id, value);
        trigger(id);
    };

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="font-semibold text-sm capitalize ">
                    {label}
                </label>
            </div>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={name}
                    rows={rows}
                    className="w-full p-2 font-medium border rounded-md border-black placeholder:opacity-60"
                    placeholder={placeholder}
                    onChange={handleChange}
                    {...register} // Register input with react-hook-form
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    className="w-full p-2 font-medium border rounded-md border-black placeholder:opacity-60"
                    placeholder={placeholder}
                    onChange={handleChange}
                    {...register} // Register input with react-hook-form
                />
            )}
            {errors[id] && <span className="text-red-500">{errors[id].message}</span>}
        </div>
    );
};

export default Input;
