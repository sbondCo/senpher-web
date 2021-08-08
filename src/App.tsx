import Upload from "pages/Upload";
import { RootState } from "store";
import { useSelector } from "react-redux";

export default function App() {
  const files = useSelector((state: RootState) => state.files.value);

  const list = files.map((x) => <li key={x.name}>{x.name}</li>);

  return (
    <div className="container min-h-screen flex flex-col justify-center items-center">
      {list}

      <div className="w-11/12 md:w-3/4 max-w-5xl p-8 md:p-20 xs:p-2 rounded-xl bg-dark-gray">
        <Upload />
      </div>
    </div>
  );
}
