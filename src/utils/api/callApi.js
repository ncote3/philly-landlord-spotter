export default async function callApi(path) {
    const c_path = 'https://murmuring-lake-58063.herokuapp.com/' + path;
    const response = await fetch(c_path);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
}
