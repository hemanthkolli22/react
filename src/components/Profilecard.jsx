import React, { useState } from "react";

function UserProfileCard() {
    const [avatar, setAvatar] = useState(null);
    const [preview, setPreview] = useState(null);
    const [name, setName] = useState("Hemanth");
    const [email, setEmail] = useState("hemanthsrkit@gmail.com");

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar(file);
            setPreview(URL.createObjectURL(file));
            setEmail(email);
            setName(name);
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg dark:bg-gray-800">
            <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                    <img
                        src={preview || "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg"}
                        className="w-full h-full rounded-full object-cover border-4 border-black-500" />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
                <h2 className="">{avatar}</h2>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-300">{email}</p>
            </div>
        </div>
    );
}

export default UserProfileCard;

