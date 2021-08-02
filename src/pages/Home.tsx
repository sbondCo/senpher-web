import { ReactComponent as Add } from "assets/add.svg";

export default function Home() {
  return (
    <div className="container min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center w-11/12 md:w-3/4 max-w-5xl p-8 md:p-20 xs:p-2 rounded-xl bg-dark-gray">
        <Add className="flex w-48" />

        <h1 className="pt-4 text-5xl text-center font-extrabold">Upload Files</h1>
        <p className="text-2xl text-center font-slim mt-3">Drag your files or click to select them for uploading.</p>
      </div>
    </div>
  );
}
