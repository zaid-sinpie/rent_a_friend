import { Dialog, DialogContent } from "@/components/ui/dialog";

const CustomDialog = ({ open, onOpenChange, children }) => {
  return (
    <Dialog open={open} onOpenChange={() => onOpenChange()}>
      <DialogContent className={"bg-[#F7F9FE] text-[#9669ff] shadow"}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
