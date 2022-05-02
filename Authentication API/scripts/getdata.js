

let getdata = async(user) => {

    let url = `https://api.github.com/users/${user}`;

    let res  = await fetch(url);

    let data = await res.json();

    return (data);
}

export default getdata;