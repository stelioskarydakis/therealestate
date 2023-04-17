import { useState } from "react";
import { BiCopy } from "react-icons/bi";

const CopyLink = () => {
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  return (
    <>
      <div
        className="absolute top-[13%] right-[3%] z-10 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <BiCopy className="text-lg text-slate-500" />
      </div>
      {shareLinkCopied && (
        <p className="absolute top-[23%] right-[5%] font-semibold border-2 border-gray-400 rounded-md bg-white z-10 p-2">
          Link Copied
        </p>
      )}
    </>
  );
};
export default CopyLink;
