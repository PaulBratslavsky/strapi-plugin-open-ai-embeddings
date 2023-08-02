import i from "styled-components";
const a = i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({ theme: t }) => t.spaces[4]};
`;
export {
  a as GridLayout
};
