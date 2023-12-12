import { x } from "@xstyled/styled-components";

interface IProps {
  name: string;
  summary: string;
  imgUrl: string;
}

export default function ShowDisplay(props: IProps) {
  return (
    <x.div display="flex">
      <x.div marginRight={8}>
        <x.img src={props.imgUrl} alt={props.name} />
      </x.div>
      <x.div>
        <x.h2 fontSize={24}>{props.name}</x.h2>
        <x.div dangerouslySetInnerHTML={{ __html: props.summary }}></x.div>
      </x.div>
    </x.div>
  );
}
