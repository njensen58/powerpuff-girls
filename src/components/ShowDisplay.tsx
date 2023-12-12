interface IProps {
  name: string;
  summary: string;
  imgUrl: string;
}

export default function ShowDisplay(props: IProps) {
  return (
    <div>
      <h2>Title: {props.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: props.summary }}></div>
      <img src={props.imgUrl} alt={props.name} />
    </div>
  );
}
