"use client";

import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../utils/constants";
import { addUser } from "../../utils/userSlice";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstname] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [about, setAbout] = useState(user?.about || "");
  const [skills, setSkills] = useState(user?.skills?.join(",") || "");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  if (!user) {
    return <div className="flex justify-center mt-10">Loading profile...</div>;
  }

  const saveProfile = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoURL,
          age,
          gender,
          about,
          skills: skills.split(",").map(s => s.trim()),
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      setError(error.response?.data || "Something went wrong.");
    }
  };

  return (
    <div className="shadow-input mx-auto my-10 w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-12 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Edit Your Profile
      </h2>

      <form className="my-8 space-y-4" onSubmit={saveProfile}>
        {/* First and Last Name */}
        <div className="flex flex-col md:flex-row gap-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Your first name"
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Your last name"
              type="text"
            />
          </LabelInputContainer>
        </div>

        {/* Age */}
        <LabelInputContainer>
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Your age"
            type="number"
          />
        </LabelInputContainer>

        {/* Photo URL */}
        <LabelInputContainer>
          <Label htmlFor="photo">Photo URL</Label>
          <Input
            id="photo"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Photo link"
            type="text"
          />
        </LabelInputContainer>

        {/* Gender */}
        <LabelInputContainer>
          <Label>Gender</Label>
          <select
            className="input input-bordered"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </LabelInputContainer>

        {/* Skills */}
        <LabelInputContainer>
          <Label htmlFor="skills">Skills (comma-separated)</Label>
          <Input
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g., React, Node, MongoDB"
            type="text"
          />
        </LabelInputContainer>

        {/* About */}
        <LabelInputContainer>
          <Label htmlFor="about">About</Label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Tell us something about yourself"
            className="textarea textarea-bordered w-full"
            rows="4"
          />
        </LabelInputContainer>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800"
        >
          Save Profile
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

export default EditProfile;

// ====== Reusable Components ======

const LabelInputContainer = ({ children, className }) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);
