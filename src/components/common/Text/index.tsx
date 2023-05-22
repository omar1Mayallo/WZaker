export type TextProps = {text: string; color?: string};
export const Text: React.FC<TextProps> = ({text, color}) => {
  return (
    <p
      style={{
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: "calc(11px + 0.35vw)",
        color: color ? color : "black",
      }}
    >
      {text}
    </p>
  );
};

export default Text;
