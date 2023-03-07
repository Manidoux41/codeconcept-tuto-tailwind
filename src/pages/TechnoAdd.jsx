import React from "react";

export default function TechnoAdd() {
  return (
    <div className="w-full py-4 bg-gray-100 px-4 my-5 rounded-sm">
      <h2 className="text-2xl text-gray-600 font-semibold">Add a techno</h2>
      <form className="w-full flex flex-col gap-4">
        <label htmlFor="technoname" className="text-xl font-semibold pt-2">Name</label>
        <input type="text" name="technoname" id="technoname"  className="rounded-md py-2 px-2"/>
        <label htmlFor="technocategory" className="text-xl font-semibold pt-2">Category</label>
        <select name="technocategory" id="technocategory" className="rounded-md py-2 px-2">
            <option value="">Select a category</option>
            <option value="front">Frontend</option>
            <option value="back">Backend</option>
            <option value="fullstack">FullStack</option>
            <option value="other">Other</option>
        </select>
        <label htmlFor="technodescription" className="text-xl font-semibold pt-2">Description</label>
        <textarea name="technodescription" id="technodescription" cols="30" rows="10"className="rounded-md py-2 px-2"></textarea>
        <input type="submit" value="Add techno" className="bg-green-500 rounded-md p-4 text-white font-semibold cursor-pointer"/>
      </form>
    </div>
  );
}
