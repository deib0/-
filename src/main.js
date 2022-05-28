const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [{ logo: 'D', url: 'developer.mozilla.org/zh-CN/' }, { logo: 'R', url: 'runoob.com/' }]
let $siteList = $('.siteList')
let $lastLi = $siteList.find('li.last')//  选择类名last的li返回元素
const simplifyUrl = (url) => {  //  简化网址
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '')  //  正则表达式
}
//  渲染函数
const render = () => {
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(`
        <li><div class="site">
        <div class="delete"><svg class="icon"><use xlink:href="#icon-delete"></use></svg></div>
        <div class="site_logo">${node.logo}</div>
        <p class="site_link">${simplifyUrl(node.url)}</p>
    </div></li>
        `).insertBefore($lastLi)
        $li.on('click', () => {   //  删除功能
            window.open(node.url)
        })
        $li.on('click', '.delete', (e) => {
            e.stopPropagation()
            hashMap.splice(index, 1)
            render()
        })
    })
}
render()
$('.addButton').on('click', () => {   //  添加网址
    let link = prompt('请问你要添加什么网址')
    if (link.indexOf('http') === -1) {
        link = 'https://' + link
    }
    hashMap.push({ logo: simplifyUrl(link)[0], url: link })
    console.log(link)
    console.log(hashMap)
    render()
})
//  储存信息
window.onbeforeunload = () => {
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x', string)
}

