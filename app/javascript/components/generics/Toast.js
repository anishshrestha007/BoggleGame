import { toast } from "react-semantic-toasts";
export const showToast=(messageType, msg)=> {
    toast({
        type: messageType,
        icon: "gamepad",
        title: "Boogle",
        description: msg,
        animation: "bounce",
        time: 5000
      });
}