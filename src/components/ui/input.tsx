import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }
// focus-visible:ring-offset-2 focus-visible:ring-ring focus-visible:ring-2
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-20 bg-white px-5 text-16 placeholder:text-grey outline-none focus-visible:border-accent focus-within:border-accent focus-within:border dark:bg-white/5",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
