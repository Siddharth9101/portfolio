import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AdminProjectForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    const projectData = {
      title: data.title,
      technologies: data.technologies,
      description: data.description,
      githubUrl: data.githubUrl,
      liveUrl: data.liveUrl,
    };

    formData.append("projectData", JSON.stringify(projectData));

    if (data.image?.[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const baseURL = import.meta.env.VITE_BACKEND_URL;
      const result = await axios.post(`${baseURL}/api/projects`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("uploaded.");
      reset();
    } catch (error) {
      alert("Failed.");
      console.error(
        "Submission failed:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Add a New Project</h2>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-white mb-1">
          Project Title
        </label>
        <input
          id="title"
          {...register("title", { required: "Title is required" })}
          placeholder="e.g. Ecommerce Website"
          className={`w-full px-4 py-2 rounded bg-gray-800 text-white border ${
            errors.title ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Technologies */}
      <div>
        <label htmlFor="technologies" className="block text-white mb-1">
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          {...register("technologies", {
            required: "Technologies are required",
          })}
          placeholder="HTML, CSS, JavaScript, Node.js"
          className={`w-full px-4 py-2 rounded bg-gray-800 text-white border ${
            errors.technologies ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.technologies && (
          <p className="text-red-500 text-sm mt-1">
            {errors.technologies.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-white mb-1">
          Description
        </label>
        <textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          placeholder="Brief description of the project"
          className={`w-full px-4 py-2 rounded bg-gray-800 text-white border ${
            errors.description ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* GitHub URL */}
      <div>
        <label htmlFor="githubUrl" className="block text-white mb-1">
          GitHub URL
        </label>
        <input
          id="githubUrl"
          {...register("githubUrl", { required: "GitHub URL is required" })}
          placeholder="https://github.com/username/project"
          className={`w-full px-4 py-2 rounded bg-gray-800 text-white border ${
            errors.githubUrl ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.githubUrl && (
          <p className="text-red-500 text-sm mt-1">
            {errors.githubUrl.message}
          </p>
        )}
      </div>

      {/* Live URL */}
      <div>
        <label htmlFor="liveUrl" className="block text-white mb-1">
          Live Project URL
        </label>
        <input
          id="liveUrl"
          {...register("liveUrl", { required: "Live URL is required" })}
          placeholder="https://yourproject.live"
          className={`w-full px-4 py-2 rounded bg-gray-800 text-white border ${
            errors.liveUrl ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.liveUrl && (
          <p className="text-red-500 text-sm mt-1">{errors.liveUrl.message}</p>
        )}
      </div>

      {/* Image */}
      <div>
        <label htmlFor="image" className="block text-white mb-1">
          Upload Screenshot
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          {...register("image", { required: "Screenshot is required" })}
          className={`w-full text-white ${
            errors.image ? "border border-red-500" : ""
          }`}
        />
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
      >
        Add Project
      </button>
    </form>
  );
}
