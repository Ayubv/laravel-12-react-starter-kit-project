import React from "react";
import { useForm } from "@inertiajs/react";

interface HeroFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  hero?: {
    id?: number;
    title?: string;
    typed_texts?: string[];
    description?: string;
    background_image?: string;
    profile_image?: string;
    button_text?: string;
    button_link?: string;
  };
  onScrollToProfile?: () => void; // ← add this
}


function HeroFormModal({ isOpen, onClose, hero, onScrollToProfile }: HeroFormModalProps) {
 const form = useForm<{
  title: string;
  typed_texts: string;
  description: string;
  background_image: File | string | null;
  profile_image: File | string | null;
  button_text: string;
  button_link: string;
}>({
  title: hero?.title || "",
  typed_texts: hero?.typed_texts?.join(", ") || "",
  description: hero?.description || "",
  background_image: hero?.background_image || null,
  profile_image: hero?.profile_image || null,
  button_text: hero?.button_text || "",
  button_link: hero?.button_link || "",
});


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    form.transform((data) => ({
      ...data,
      typed_texts: data.typed_texts
        ? data.typed_texts.split(",").map((t: string) => t.trim())
        : [],
    }));

    if (hero?.id) {
      form.put(route("heroes.update", hero.id), {
        onSuccess: () => onClose(),
      });
    } else {
      form.post(route("heroes.store"), {
        onSuccess: () => onClose(),
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full max-h-[80vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <input
            type="text"
            value={form.data.title}
            onChange={(e) => form.setData("title", e.target.value)}
            placeholder="Title"
            required
            className="w-full border rounded px-3 py-2"
          />

          {/* Typed texts */}
          <input
            type="text"
            value={form.data.typed_texts}
            onChange={(e) => form.setData("typed_texts", e.target.value)}
            placeholder="Typed texts (comma separated)"
            className="w-full border rounded px-3 py-2"
          />

          {/* Description */}
          <textarea
            value={form.data.description}
            onChange={(e) => form.setData("description", e.target.value)}
            placeholder="Description"
            className="w-full border rounded px-3 py-2"
          />

         {/* Background Image */}
<div>
  <label className="block mb-1 font-medium">Background Image</label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => form.setData("background_image", e.target.files?.[0] || null)}
    className="w-full border rounded px-3 py-2"
  />
  {/* Optional preview */}
  {form.data.background_image && typeof form.data.background_image !== "string" && (
    <img
      src={URL.createObjectURL(form.data.background_image)}
      alt="Background Preview"
      className="w-full h-32 object-cover mt-2 rounded"
    />
  )}
</div>

{/* Profile Image */}
<div>
  <label className="block mb-1 font-medium">Profile Image</label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => form.setData("profile_image", e.target.files?.[0] || null)}
    className="w-full border rounded px-3 py-2"
  />
  {/* Optional preview */}
  {form.data.profile_image && typeof form.data.profile_image !== "string" && (
    <img
      src={URL.createObjectURL(form.data.profile_image)}
      alt="Profile Preview"
      className="w-20 h-20 object-cover rounded-full mt-2"
    />
  )}
</div>

          {/* Button Text */}
          <input
            type="text"
            value={form.data.button_text}
            onChange={(e) => form.setData("button_text", e.target.value)}
            placeholder="Button text"
            className="w-full border rounded px-3 py-2"
          />

          {/* Button Link */}
          <input
            type="text"
            value={form.data.button_link}
            onChange={(e) => form.setData("button_link", e.target.value)}
            placeholder="Button link"
            className="w-full border rounded px-3 py-2"
          />

          {/* Actions */}
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              disabled={form.processing}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {hero ? "Update" : "Create"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HeroFormModal;
