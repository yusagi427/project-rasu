function hyoji(){
    //表示する文字
    var str ="よさこいみんなもやろう";
    //テキストボックスの文字数
    var cnt=document.timer.moji.value.length;
    //文字が全部表示されているか確認
    if(cnt<11){
    //現在より1文字多く切り出して表示
    document.timer.moji.value=str.substr(0,cnt+1);}
    //すべて表示されたら空文字に戻す
    else{
    document.timer.moji.value="";}
}

function startfnc(){
    //関数hyoji()を800ミリ間隔で呼び出す
    setInterval("hyoji()",800);
}