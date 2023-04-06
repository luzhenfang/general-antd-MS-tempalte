const identity: string = "neo-blog-token";


// 设置 token
const setToken = (token: string) => {
    window.localStorage.setItem(identity, token);
}

// 获取 token
const getToken = (): string | null => {
    return window.localStorage.getItem(identity);
}

// 删除 token
const removeToken = () => {
    window.localStorage.removeItem(identity);
}

export{
    setToken,
    getToken,
    removeToken
}