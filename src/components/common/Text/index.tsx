export type TextProps = {text: string};
export const Text: React.FC<TextProps> = ({text}) => {
  return (
    <p
      style={{
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: "calc(11px + 0.35vw)",
      }}
    >
      {text}
    </p>
  );
};

export default Text;
