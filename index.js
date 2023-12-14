function getUID() {
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let x = Math.floor(Math.random() * 9999);
    let y = '';
    for (let i = 0; i < 3; i++) {
        y += abc[Math.floor(Math.random() * abc.length)];
    }
    let z = [new Date().getSeconds(), new Date().getMilliseconds()].join('');

    return btoa(x + y + z) + x + y + z;
};

export default getUID;