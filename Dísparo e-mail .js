var mailApp=MailApp;
var app=SpreadsheetApp;
var spreadsheet=app.getActiveSpreadsheet();
var sheet=spreadsheet.getSheetByName("Página1");

function sendMails() {

  var values=sheet.getDataRange().getValues();
  for (var row=0; row < values.length; row++){
    if(row > 0) {
      mailApp.sendEmail(values[row][1], "Vaga para "+values[row][2], "Oi "+values[row][0]+", boa tarde!\n\nVi a vaga de "+values[row][2]+" no "+values[row][3]+", ficarei feliz em fazer parte da empresa. Aguardo resposta para darmos continuidade.\n\nAgradeço a atenção ;D");
    }
  }


 
}