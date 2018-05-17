//tables表示table们组成的数组
let tables = [];
// 下拉表1
let select1 = document.getElementById('select1');
// 下拉表2
let select2 = document.getElementById('select2');
//第一部分
let part1 = document.getElementById('part1');
//创建表格名input
let input1= document.createElement('input');
//创建表格列数input
let input2= document.createElement('input');
//显示相同数目的属性栏和提交按钮的布局
let tempo = document.createElement('div');
//表头元素个数
let attrNumber;
//表头元素形成的数组
let attrs = [attrNumber];
//约定只有一个表格显示
let table = document.getElementsByTagName('table')[0];
//增加行数元素数组
let addcols=[];
//删除行数元素数组
let deletecols=[];


//下拉表1的选择
select1.onchange = function() {
  let item = select1.options[select1.selectedIndex].value;
  if(item==0){  selectOne();}
  if(item==1){  createTable();}
  if(item==2){  addRow();}
  if(item==3){  deleteRow();}
  if(item==4){  deleteTable();}
};



//从下拉列表中选择一项开始，此函数无特定功能
function selectOne(){
  part1.innerHTML=null;
}



//创建新表格
function createTable(){
  //清空上一次的输入
  part1.innerHTML=null;
  input1.value=null;
  input2.value=null;
  //第一个输入框
  input1.type='text';
  input1.placeholder='Table Name';
  part1.appendChild(input1);
  //第二个输入框
  input2.type='number';
  input2.placeholder='Column Number';
  part1.appendChild(input2);
}
//创建新表格过程中，输入数字显示相同数目的属性栏和提交按钮
let commitTable = document.createElement('input');
input2.onchange = function showAttribute() {
  tempo.innerHTML="";
  //显示属性栏
  attrNumber = this.value; //input2的值
  if(attrNumber > 0){
    for (let i = 0; i < attrNumber; i++) {
      attrs[i] = document.createElement('input');
      attrs[i].type = 'text';
      attrs[i].placeholder = 'Attribute';
      part1.appendChild(tempo);
      tempo.appendChild(attrs[i]);
    }
    showCommit(commitTable);
  }
};
//每次提交就创建了一个新表格
commitTable.onclick = function(){
  let tableName = input1.value;
  let colNumber = input2.value;

  table.innerHTML="";
  //创建新的选项并选中
  let newOption = new Option(tableName);
  newOption.selected = true;
  select2.options.add(newOption);

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let attrThs = [];
  let textTds = [];
  for (let i = 0; i < colNumber; i++) {
    attrThs[i] = document.createElement('th');
    textTds[i] = document.createTextNode(attrs[i].value);
    attrThs[i].appendChild(textTds[i]);
    tr.appendChild(attrThs[i]);
  }
  tables.push(new Table(tableName));
  tables[tables.length-1].colNumber=colNumber;
  for (let i = 0; i < attrs.length; i++) {
    tables[tables.length-1].ths[i] = attrs[i].value;
  }
  newOption.value = tables.length - 1 + "";
};



//为当前表格增加一行
let commitNewRow = document.createElement('input');
function addRow(){
  //清空上一次的输入
  part1.innerHTML=null;
  let  jiuming = tables[select2.selectedOptions[0].value].colNumber;
  for(let i = 0;i<jiuming;i++){
    addcols[i]=document.createElement('input');
    addcols[i].type='text';
    addcols[i].placeholder='Attr'+(i+1);
    addcols[i].style.width=(280/jiuming)+'px';
    part1.appendChild(addcols[i]);
  }
  showCommit(commitNewRow);
}
//每次提交就创建了新的一行
commitNewRow.onclick = function(){
  let currentCol=tables[select2.selectedOptions[0].value].colNumber;
  let tr = document.createElement('tr');
  table.appendChild(tr);

  let attrTds = [];
  let textTds = [];
  let temp = select2.selectedOptions[0].value;
  let temp2 = tables[temp].rowNumber;
  for(let i = 0;i<currentCol;i++){
    attrTds[i] = document.createElement('td');
    textTds[i] = document.createTextNode(addcols[i].value);
    tables[temp].trs[temp2][i]=addcols[i].value;//bug
    attrTds[i].appendChild(textTds[i]);
    tr.appendChild(attrTds[i]);
  }
  tables[select2.selectedOptions[0].value].rowNumber++;

};



//为当前表格删除一行
let commitDeleteRow = document.createElement('input');
function deleteRow(){
  part1.innerHTML=null;
  let  jiuming = tables[select2.selectedOptions[0].value].colNumber;
  for(let i = 0;i<jiuming;i++){
    deletecols[i]=document.createElement('input');
    deletecols[i].type='text';
    deletecols[i].placeholder='Attr'+(i+1);
    deletecols[i].style.width=(280/jiuming)+'px';
    part1.appendChild(deletecols[i]);
  }
  showCommit(commitDeleteRow);
}
//每次提交就删除了新的一行
commitDeleteRow.onclick = function(){
  let currentCol=tables[select2.selectedOptions[0].value].colNumber;
  largeloop:
  for(let j =tables[select2.selectedOptions[0].value].rowNumber-1; j>=0;j--) {
    smallloop:
    for (let i = 0; i < currentCol; i++) {
      if(deletecols[i].value==''){
        continue smallloop;
      }
      if ((deletecols[i].value!=='')&&(deletecols[i].value == tables[select2.selectedOptions[0].value].trs[j][i])) {
        continue smallloop;
      }
      else{
        continue largeloop;
      }
    }
    document.getElementsByTagName("table")[0].deleteRow(j+1);
    tables[select2.selectedOptions[0].value].trs.splice(j,1);
    tables[select2.selectedOptions[0].value].rowNumber--;
  }
};




//删除当前表格
let commitDeleteTable= document.createElement('input');
function deleteTable() {
  part1.innerHTML = "<p style='color: red;font-size: 20px'>WARNING: You cannot undo this action!</p>";
  showCommit(commitDeleteTable);
}
commitDeleteTable.onclick = function(){
  table.innerHTML = "";

  if (select2.selectedOptions[0].value !== "SELECT(default: last created)") {
    select2.options.remove(select2.selectedIndex);
    tables.splice(select2.selectedOptions[0].value,1);// delete的真正用法？
  }
  select2.options[select2.options.length-1].selected=true;
  let index = select2.selectedIndex;
  let tableNum = select2.options[index].value;
  if(select2.options[index].value=="SELECT(default: last created"){
    return;
  }
  //显示所选择的表格(重新再写一遍生成表格的动态js)
  let realths=[];
  let realthTexts=[];
  let realtrs=[];

  for(let i = 0;i<tables[tableNum].rowNumber+1;i++){
    realtrs[i] = document.createElement('tr');
    for(let j = 0;j<tables[tableNum].colNumber;j++) {
      if (i == 0) {
        realths[j] = document.createElement('th');
        realthTexts[j] = document.createTextNode(tables[tableNum].ths[j]);
        realths[j].appendChild(realthTexts[j]);
        realtrs[i].appendChild(realths[j]);
      }else {
        let realtdTexts = [];
        let realtds = [];
        realtds[j] = document.createElement('td');
        realtdTexts[j] = document.createTextNode(tables[tableNum].trs[i-1][j]);
        realtds[j].appendChild(realtdTexts[j]);
        realtrs[i].appendChild(realtds[j]);
      }
    }
    table.appendChild(realtrs[i]);
  }


};



//下拉表2的选择
select2.onchange=function(){
  table.innerHTML="";
  let index = select2.selectedIndex;
  let tableNum = select2.options[index].value;
  if(select2.options[index].value=="SELECT(default: last created"){
    return;
  }
  //显示所选择的表格
  let realths=[];
  let realthTexts=[];
  let realtrs=[];

  for(let i = 0;i<tables[tableNum].rowNumber+1;i++){
    realtrs[i] = document.createElement('tr');
    for(let j = 0;j<tables[tableNum].colNumber;j++) {
      if (i == 0) {
        realths[j] = document.createElement('th');
        realthTexts[j] = document.createTextNode(tables[tableNum].ths[j]);
        realths[j].appendChild(realthTexts[j]);
        realtrs[i].appendChild(realths[j]);
      }else {
        let realtdTexts = [];
        let realtds = [];
        realtds[j] = document.createElement('td');
        realtdTexts[j] = document.createTextNode(tables[tableNum].trs[i-1][j]);
        realtds[j].appendChild(realtdTexts[j]);
        realtrs[i].appendChild(realtds[j]);
      }
    }
    table.appendChild(realtrs[i]);
  }
};

//显示提交按钮
function showCommit(commit){
  //显示提交按钮
  commit.type = 'button';
  commit.value = 'commit';
  commit.style.width='300px';
  part1.appendChild(commit);
}

//table对象的构造函数
function Table(tableName){
  this.tableName = tableName;
  this.colNumber = 0;
  this.ths=[];
  this.trs=[];
  this.rowNumber=0;
  for(let i=0;i<=10;i++){
    this.trs[i]=[];
  }
}
