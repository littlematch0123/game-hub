import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}
const PlatFormIconList = ({ platforms }: Props) => {
  const iconMap: Record<string, IconType> = {
    pc: FaWindows as IconType,
    playstation: FaPlaystation as IconType,
    xbox: FaXbox as IconType,
    nintendo: SiNintendo as IconType,
    mac: FaApple as IconType,
    linux: FaLinux as IconType,
    ios: MdPhoneIphone as IconType,
    android: FaAndroid as IconType,
    web: BsGlobe as IconType,
  };
  return (
    <HStack marginY={2}>
      {platforms?.map(({ id, slug }) => (
        <Icon key={id} as={iconMap[slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatFormIconList;
