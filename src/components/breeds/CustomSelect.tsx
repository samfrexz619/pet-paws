import React from 'react';
import {
  Select,
  SelectContent,
  // SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


interface Props {
  triggerCls: string;
  placeholder: string;
  contentCls: string;
  children: React.ReactNode;
}

const CustomSelect: React.FC<Props> = (props) => {

  const { triggerCls, placeholder, contentCls, children } = props;


  return (
    <Select>
      <SelectTrigger className={triggerCls}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={`${contentCls} dark:bg-white/10`}>
        {children}
      </SelectContent>
    </Select>
  );
}

export default CustomSelect;
