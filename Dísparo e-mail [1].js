var mailApp=MailApp;
var app=SpreadsheetApp;
var spreadsheet=app.getActiveSpreadsheet();
var sheet=spreadsheet.getSheetByName("Página1");



let drive=DriveApp;
let folderID="1OihWDBRijrK0tl9N9rTlKiTqUJq2eZg1";


function sendMails() {

  var values=sheet.getDataRange().getValues();
  var last=values.length;
  let pdf=drive.getFolderById(folderID).getFilesByName("Currículo TI.pdf").next().getAs('application/pdf');

  var insocial = "<td height=0px><a href=https://www.linkedin.com/in/nogueira-jv/><img src=https://img.icons8.com/fluency/32/000000/linkedin-circled.png/></a></td>";
  var namesocial = "<td height=0px><a href=https://www.linkedin.com/in/nogueira-jv/>João Vitor Nogueira</a></td>";

  var wppsocial = "<td height=0px><a href=https://api.whatsapp.com/send?phone=+5511977768397><img src=https://img.icons8.com/fluency/32/000000/whatsapp.png/></a></td>";
  var numbersocial = "<td height=0px><a href=https://api.whatsapp.com/send?phone=+5511977768397> +55 (11) 97776-8397</a></td>";

  for (var row=0; row < last; row++){
    if(row > 0) {

      mailApp.sendEmail({
        to: values[row][1],
        subject: "Vaga para "+values[row][2],
        htmlBody: "Oi "+values[row][0]+", boa tarde!<br><br>Vi a vaga de "+values[row][2]+" no "+values[row][3]+", eu gostaria de saber mais informações pois estou avaliando novas oportunidades. "+values[row][4]+"Segue em anexo o meu currículo. Agradeço pela atenção.<br><br>Aguardo resposta ;D<br><br>Atenciosamente,<br><br>"+insocial+namesocial+"&emsp;"+wppsocial+numbersocial, //quanto as responsabilidades que terei, pela minha experiência profissional na área da tecnologia e pelos meus objetivos, penso entre R$ 2.500,00 no modelo CLT. Estou aberto a negociar pois tenho interesse na vaga. Tenho preferência sendo o contrato PJ.
        attachments: [pdf]
                       })
   
    }
  }


 
}