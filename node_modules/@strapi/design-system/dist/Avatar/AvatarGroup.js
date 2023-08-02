import r from "styled-components";
import { avatarSize as o } from "./constants.js";
import { Flex as t } from "../Flex/Flex.js";
const e = r(t)`
  & > * + * {
    margin-left: -${o / 2}px;
  }
`;
export {
  e as AvatarGroup
};
