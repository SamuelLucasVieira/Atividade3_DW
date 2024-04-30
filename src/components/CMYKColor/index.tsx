
import useCMYK from "../../hooks/useCMYK";
import Block from "../Block";
import Input from "../Input";
import Line from "../Line";
import Title from "../Title";

export default function CMYKColor() {
  const {
    cyan,
    black,
    magenta,
    yellow,
    setCyan,
    setMagenta,
    setYellow,
    setBlack,
    color
  } = useCMYK();
  return (
    <Block color={color}>
      <Title>CMYK Color</Title>
      <Line>
        <Input label="Cyan" value={cyan} setValue={setCyan} min={0} max={255} />
        <Input label="Magenta" value={magenta} setValue={setMagenta} min={0} max={255} />
        <Input label="Yellow" value={yellow} setValue={setYellow} min={0} max={255} />
        <Input label="Black" value={black} setValue={setBlack} min={0} max={255} />
      </Line>
    </Block>
  );
}
