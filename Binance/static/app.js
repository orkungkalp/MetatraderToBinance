

function getdata(){

            $.ajax({
            type: 'GET',
                url: "/getdata",
                dataType: 'json',
            success: function (data) {
         if($('table#table1').length){

         var removeTab = document.getElementById('table1');
        var parentEl = removeTab.parentElement;
        parentEl.removeChild(removeTab);
            }
                        var stock = new Array()
            var myTableDiv = document.getElementById("metatrader")
            var table = document.createElement('TABLE')
               table.id = "table1";
            var tableBody = document.createElement('TBODY')

            table.border = '1'
            table.appendChild(tableBody);

            var heading = new Array();
            heading[0] = "Ticket"
            heading[1] = "Type Operation"
            heading[2] = "Symbol"
            heading[3] = "Stop Loss"
            heading[4] = "Take Profit"
            heading[5] = "Order Opening"
            heading[6] = "Price at the moment"
            heading[7] = "Stato"

            for (var i = 0; i < data.length; i++){


          stock[i]= new Array(data[i][0],data[i][1],data[i][2],data[i][3],data[i][4],data[i][5],data[i][6],data[i][7])

           } //TABLE COLUMNS
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);
            for (i = 0; i < heading.length; i++) {
                var th = document.createElement('TH')
                th.width = '75';
                th.appendChild(document.createTextNode(heading[i]));
                tr.appendChild(th);

            }

                  //TABLE ROWS
            for (i = 0; i < stock.length; i++) {
    var tr = document.createElement('TR');
    for (j = 0; j < stock[i].length; j++) {
        var td = document.createElement('TD')
        td.appendChild(document.createTextNode(stock[i][j]));
        tr.appendChild(td)
    }
    tableBody.appendChild(tr);
}

            myTableDiv.appendChild(table)





  }

  });
  }


$(document).ready(function(){
 setInterval(getdata,1000);
});