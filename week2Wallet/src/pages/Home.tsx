import * as bip39 from "bip39";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { ToastDemo } from "@/components/Toaster";

window.Buffer = Buffer;

const Home = () => {
  const [Mnemonic, setMnemonic] = useState("");

  useEffect(() => {
    const existingMnemonic = localStorage.getItem("generatedMnemonic");
      if(existingMnemonic) {
        setMnemonic(existingMnemonic);
      }
  }, []);

  
  const handleGenerateMnemonic = () => {
    const existingMnemonic = localStorage.getItem("generatedMnemonic");

    if(!existingMnemonic){
      const generateMnemonic = bip39.generateMnemonic();
      localStorage.setItem("generatedMnemonic", generateMnemonic);
      setMnemonic(generateMnemonic);
      console.log(generateMnemonic);
    }
  };

  const handleDeleteMnemonic = () => {
    localStorage.removeItem("generatedMnemonic");
    setMnemonic('');
  }

  return (
    <div className="bg-black">
      <div className="flex gap-10">
        <Button className="bg-zinc-500" onClick={handleGenerateMnemonic}>
          Create Mnemonic
        </Button>
        <div>
          <ToastDemo onDelete={handleDeleteMnemonic} />
        </div>
      </div>

      <div className="create">{Mnemonic || "No Mnemonic generated yet"}</div>

      <Toaster />
    </div>
  );
};

export default Home;
