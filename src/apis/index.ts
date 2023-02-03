export const recommand = () => {
    const url = 'https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed'
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            id_type: 2,
            client_type: 2608,
            sort_type: 200,
            cursor: '0',
            limit: 20
        })
    })
}