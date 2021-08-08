import { ReactComponent as Add } from "assets/add.svg";
import { useDispatch } from "react-redux";
import { add } from "slices/fileSlice";

export default function Upload() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <Add className="flex w-48" />

      <h1 className="pt-4 text-5xl text-center font-extrabold">Upload Files</h1>
      <p className="text-2xl text-center font-slim mt-3">Drag your files or click to select them for uploading.</p>

      <button onClick={() => dispatch(add({ name: "rando" }))}>Add file</button>
    </div>
  );
}
