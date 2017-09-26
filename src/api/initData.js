const initData = () => (
    fetch('http:192.168.0.104/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
