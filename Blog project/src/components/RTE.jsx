import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              branding: false,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
              ],
              toolbar: "undo redo | formatselect | bold italic underline |",
            }}
            onEditorChange={onchange}
          />
        )}
      />
    </div>
  );
}
