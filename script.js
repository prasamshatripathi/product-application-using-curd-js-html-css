var selectedRow=null;
function onFormSubmit(event){
   event.preventDefault();
    var formData=readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);


    }
    resetForm();

}
//retrieve the data
function readFormData(){
    var formData={};
    formData["productcode"]=document.getElementById("productcode").value;
    formData["product"]=document.getElementById("product").value;
    formData["qty"]=document.getElementById("qty").value;
    formData["perprice"]=document.getElementById("perprice").value;
    return formData;
    }
    //insert the data
    function insertNewRecord(data)
    {
        var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
        var newRow=table.insertRow(table.length);
        var cell1=newRow.insertCell(0);
        cell1.innerHTML=data.productcode;
        var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.product;
        var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.qty;
        var cell4=newRow.insertCell(3);
        cell4.innerHTML=data.perprice;
        var cell4=newRow.insertCell(4);
        cell4.innerHTML=`<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;

    }
    //edit the data
    function onEdit(td){
        selectedRow=td.parentElement.parentElement;
        document.getElementById('productcode').value=selectedRow.cells[0].innerHTML;
        document.getElementById('product').value=selectedRow.cells[1].innerHTML;
        document.getElementById('qty').value=selectedRow.cells[2].innerHTML;
        document.getElementById('perprice').value=selectedRow.cells[3].innerHTML;
    }
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.productcode;
    selectedRow.cells[1].innerHTML=formData.product;
    selectedRow.cells[2].innerHTML=formData.qty;
 selectedRow.cells[3].innerHTML=formData.perprice;}
//delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
       var row=td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}
//reset data
function resetForm(){
    document.getElementById('productcode').value='';
    document.getElementById('product').value='';
    document.getElementById('qty').value='';
    document.getElementById('perprice').value='';
    selectedRow= null;
}