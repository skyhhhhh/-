// index.js
var start,end,sum,n;
Page({
  startNum:function(e){
    start=parseInt(e.detail.value);
  },
  endNum:function(e){
    end=parseFloat(e.detail.value);
  },
  calc:function(){
    sum=1,n=start;
    for(var sum=1;sum<=5;sum++){
      n=n+n*end
    }
    this.setData({
      n:n
    })
  }
})