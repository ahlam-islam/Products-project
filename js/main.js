var changed = document.getElementById("changed");
var newUpDate = document.querySelector(".layout");
var proNameUpdate = document.getElementById("proNameInpUpdate").value;
var proPriceUPdate = document.getElementById("proPriceInpUpdate").value;
var proCatUpdate = document.getElementById("proCategoryInpUpdate").value;
var proDescUpdate = document.getElementById("proDescInpUpdate").value;
var allProducts; 

var currentIndex;





if (localStorage.getItem("product") == null)
{
    allProducts = [];
}
else
{
    allProducts = JSON.parse(localStorage.getItem("product"));
    dispplayData(allProducts);
}
    


function addProduct()
{

    var proName = document.getElementById("proNameInp").value;
    var proPrice = document.getElementById("proPriceInp").value;
    var proCat = document.getElementById("proCategoryInp").value;
    var proDesc = document.getElementById("proDescInp").value;

    var oneProduct = {

        name:proName,
        price:proPrice,
        category :proCat,
        Description:proDesc
    }

    allProducts.push(oneProduct);
    localStorage.setItem("product", JSON.stringify(allProducts));
    dispplayData(allProducts);
    clearData()

}




function dispplayData() //Array bt3i elli fih kol el data
{
    temp = ``;
  
    for(var i =0; i < allProducts.length ;i++)
    {

       
        temp += `<tr>
        <td>` + i + `</td>
        <td>`+ allProducts[i].name + `</td>
        <td>` + allProducts[i].price + `</td>
        <td>` + allProducts[i].category + `</td>
        <td>` + allProducts[i].Description + `</td>
    <td><button onclick="displayBac(`+i+`)"  class="edite btn btn-warning">update</button></td>
        <td><button onclick="deleteProdect(`+i+`)" class="btn btn-danger">delete</button></td>
        </tr>`
    }
    

    document.getElementById("myBody").innerHTML = temp;
}


function clearData()
{
    document.getElementById("proNameInp").value = "";
    document.getElementById("proPriceInp").value = "";
    document.getElementById("proCategoryInp").value= "";
    document.getElementById("proDescInp").value = "";
   document.getElementById("proNameInpUpdate").value ="";
     document.getElementById("proPriceInpUpdate").value = "";
   document.getElementById("proCategoryInpUpdate").value ="";
      document.getElementById("proDescInpUpdate").value ="";
 }



function search(output) {
    var findProdect = ``;
    var findProdect2 = ``;
    var newTxt = ``;
    
    for (var i = 0; i < allProducts.length; i++)
        if (allProducts[i].name.includes(output.trim()) == true)
        {
            findProdect += `<tr>
            <td>` + i + `</td>
            <td>`+ allProducts[i].name + `</td>
            <td>` + allProducts[i].price + `</td>
            <td>` + allProducts[i].category + `</td>
            <td>` + allProducts[i].Description + `</td>
            <td><button class="btn btn-warning">update</button></td>
            <td><button onclick="deleteProdect(`+ i + `)" class="btn btn-danger">delete</button></td>
            </tr>`;
            newTxt = allProducts[i].name.replace(output, `<span style = "color:red" >` + output + `</span>`);
           
            findProdect2 += `<p>` + newTxt + `</p>`;

        }
     
       
    document.getElementById("myBody").innerHTML = findProdect;
    document.getElementById("contanier").innerHTML = findProdect2;
    
    
}


function deleteProdect(index)
{
    allProducts.splice(index, 1);
    localStorage.setItem("product", JSON.stringify(allProducts));
    dispplayData(allProducts);

}



function displayBac(indexx)
{
    currentIndex = indexx;
  
    newUpDate.style.display = "flex"; 
}




changed.addEventListener("click", function ()
{
        allProducts[currentIndex].name = proNameUpdate;
        allProducts[currentIndex].price = proPriceUPdate;
        allProducts[currentIndex].category = proCatUpdate;
        allProducts[currentIndex].Description = proDescUpdate;
        dispplayData(allProducts);
        localStorage.setItem("product", JSON.stringify(allProducts));
        clearData();
        newUpDate.style.display = "none";  

    
})













