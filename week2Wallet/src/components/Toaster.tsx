import { useToast } from "@/hooks/use-toast"
import { Button } from "./ui/button"

export const ToastDemo = ({ onDelete }) => {
    const { toast } = useToast()

    const handleDelete = () => {
        localStorage.removeItem('generatedMnemonic');
        console.log("mnemonic deleted");
        

        if (onDelete) {
            onDelete();
        }
        
        // Show the toast notification after deletion
        toast({
          title: "Mnemonic Deleted",
          description: "You can create your Mnemonic again",
        });
    };

    return (
      <Button
        onClick={handleDelete}
      >
        Delete Mnemonic
      </Button>
    )
  }
  