export default function Post(props: any) {

    return (<>
        <h2>{props.id}</h2>
        <img
            src={props.url}
            height={400}
            width={400}
            alt="" /></>)
}