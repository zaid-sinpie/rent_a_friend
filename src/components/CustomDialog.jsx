import { Dialog, DialogContent } from "@/components/ui/dialog";

const CustomDialog = ({ open, onOpenChange, children }) => {
  return (
    <Dialog open={open} onOpenChange={() => onOpenChange()}>
      <DialogContent className={"bg-[#F7F9FE] text-[#FDC3A1] shadow"}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
