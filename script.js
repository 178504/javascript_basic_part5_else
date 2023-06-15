//1. elseを使用する時の注意点
//elseを使用するときは指定した値がtrueなのかfalseなのかどちらの処理で行うか処理をしなくてはならないので考えながら処理を行う必要がある。

//2. JavaScriptで実装した時の確認ポイント
//実装する際はデベロッパーツールでエラーが発生してないかちゃんと表示されているか確認しながら実装する。

//3. 数値型を比較してelseの処理に入る処理を作ってください。
var variableNumber = 178;
if(variableNumber){
  console.log("trueの処理");
  console.log(variableNumber);
}
else{
  console.log("falseの処理");
  console.log(variableNumber);
}
//4. 文字列型を比較してelseの処理に入る処理を作ってください。
var variableText = "text";
if(variableText){
  console.log("trueの処理");
  console.log(variableText);
}
else{
  console.log("falseの処理");
  console.log(variableText);
}