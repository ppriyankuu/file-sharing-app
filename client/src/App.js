import { useState, useEffect, useRef } from "react";
import { uploadFile } from "./service/api";
import { BsCloudUploadFill } from "react-icons/bs";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex justify-center w-full h-screen">
      <div className="w-[700px] h-[500px] bg-slate-900 my-20 text-white text-center py-10 rounded-3xl">
        <h1 className="font-semibold text-5xl leading-[5rem]">
          Cranky share!!!
        </h1>
        <p className="font-semibold text-xl leading-[5rem]">
          Upload the file and then create a download link so to easily share it
        </p>

        <button
          className="px-4 py-2 bg-white rounded-3xl text-black font-semibold text-xl flex items-center mx-auto gap-1 mb-20"
          onClick={() => onUploadClick()}
        >
          Upload <BsCloudUploadFill size={23} className="mt-1" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        {result && (
          <a className="p-4 border rounded-full" href={result}>
            {result}
          </a>
        )}
      </div>
    </div>
  );
}
// done 
export default App;
