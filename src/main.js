let demo = document.querySelector('#demo')
let style = document.querySelector('#style')
let string = `/*
你好,接下来我要展示的是一个动画八卦图!
具体请代码往下看
*/

/*先画一个正方形*/
.Diagrams{
    border:1px solid #eee;
    border-radius: 50%;
    background: linear-gradient(90deg,rgba(255,255,255,1) 50%, rgba(255,255,255,1)  50%,  rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%);
}

/*再画两个圆*/

/*第一个圆开始*/
.Diagrams::before{
    top:0;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*第一个圆结束*/

/*第二个圆开始*/
.Diagrams::after{
    bottom:0;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*第二个圆结束*/

/*好了,八卦图完成了*/
`
// string = string.replace('\n', '<br/>') // 只能改变第一个回车换行 所以我们选用第二种办法正则
// string=string.replace(/\n/g,'<br/>')
let n = 0
let string2 = ''  //页面渲染的string2  处理过的直接用string会出现<

// demo.innerHTML = string.substring(0,n)


//封装函数
let step = ()=>{
    setTimeout(() => {
        if(string[n]==='\n'){
            // string2 = string2+"<br/>"
            // 如果它的值是回车 那么就加一个换行  怎么查看是不是<br>或者回车  用string.charCodeAt() //得到的结果是10 
            string2 += '<br>'
        }else if(string[n] === ' ' ){
            string2 += '&nbsp;'
            
            // console.log(string[n])
        }else{
            // 如果它的值不是加车 那么就加string[n]的下一个
            string2 = string2+string[n]
        }
        // console.log(string[n])
       
        // string2 = string2+string[n]
        demo.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,99999)
        demo.scrollTo(0,99999)
        // demo.innerHTML = string.substring(0,n) //不知道取值n  因为循环一个一个出来的 所以取n 可以实现动画效果 之前自己试一直取string.length 一下子就出来了 是因为写死了
        
        if(n<string.length-1){
            n=n+1
            step()
        }
        
    }, 10);
}
step()


// setTimeout(() => {
//     style.innerHTML=`body{
//         color:red;
//     }`
// }, 1000);

// setTimeout(() => {
//     step()
// }, 1000);


// setInterval(() => {
//     n=n+1
//     demo.innerHTML= n
// }, 1000);