import { x } from "@xstyled/styled-components";

interface IProps {
  name: string;
  summary: string;
  imgUrl: string;
}

export default function ShowDisplay(props: IProps) {
  return (
    <x.div 
      display="flex" 
      color="white" 
      flexDirection={{_: 'column', sm: 'column', md: 'row'}}
    >
      <x.div marginRight={8}>
        <x.img src={props.imgUrl} alt={props.name} />
      </x.div>
      <x.div>
        <x.h2 fontSize={24} marginBottom={4}>{props.name}</x.h2>
        <x.div dangerouslySetInnerHTML={{ __html: props.summary }} maxWidth="600px"></x.div>
      </x.div>
    </x.div>
  );
}
