const ipAddress = '161.35.90.67';
const get = async (url) => {
    const res = await fetch(`http://${ipAddress}:4000/${url}`);
    return res.json();
};

const post = async (url, data) => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    const res = await fetch(`http://${ipAddress}:4000/${url}`, options);
    return res.json();
};

export { get, post };
