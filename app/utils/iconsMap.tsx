import { MaterialIcons } from "@expo/vector-icons";
import { JSX, useState } from "react";



 export const iconsMap: Record<string, JSX.Element> = {
    email:  <MaterialIcons name="mail-outline" className="pl-[14px]" color={"#0052B4"}  size={16}  />,
    password: <MaterialIcons name="lock-outline" className="pl-[14px]" color={"#0052B4"}  size={16}  />
  }
  