import Image from "next/image";

// Importing Global Components 
import UploadIcon from "@/components/UploadIcon";
import DemoSection from "@/components/DemoSection";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader
        h1Text="Add epic captions to your videos"
        h2Text="Just upload your video and we will do the rest"
      />
      <div className="text-center">
        <label className="bg-green-400 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer">
          <UploadIcon />
          <span>
          Choose File
          </span>
          <input type="file" name="" className="hidden" id="" />
        </label> 
      </div>
      <DemoSection />
    </>
  );
}
