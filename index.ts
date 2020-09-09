console.log("王呵呵")

function Xuan(this: { constructor: (obj: any) => void; init: () => void; bindEvent: () => void; }, obj: any){
    (<any>Object).assign(this,{},obj);
    this.init();
}

//原型函数
Xuan.prototype = {

    constructor:Xuan,
    init:function(){ //初始化
        this.bindEvent();
    },
    bindEvent:function(){ //绑定事件
        var that = this;
        this.title.addEventListener('click',function(e: { target:any; }){
            
            var tar = e.target;
            if(tar.nodeName==='LI'){
                //取消上一次高亮
                document.querySelector('.title .active')&&(<any>document.querySelector('.title .active')).classList.remove('active');
                //当前项高亮
                tar.classList.add('active');
                //隐藏内容
                document.querySelector('.content .active')&&(<any>document.querySelector('.content .active')).classList.remove('active');
                //当前下标下的内容高亮
                var ind = [...that.title.children].indexOf(tar);
                that.content.children[ind].classList.add('active');
            }
        })

    }

}

console.log("小哥哥")
