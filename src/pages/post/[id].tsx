
export default function Post(props: any) {

    return (<>
        <h2>{props.id}</h2>
        <img
            src={props.url}
            height={400}
            width={400}
            alt="" /></>)
}
export async function getServerSideProps(context: any) {
    const { id } = context.query;
    const res = await fetch('https://api.vvhan.com/api/acgimg?type=json')
    const json = await res.json()
    return {
        props: {
            id: id,
            url: json.imgurl
        }
    }
}