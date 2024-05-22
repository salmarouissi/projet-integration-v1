import { Component } from '@angular/core';

@Component({
  selector: 'app-dashdemande',
  templateUrl: './dashdemande.component.html',
  styleUrls: ['./dashdemande.component.css']
})
export class DashdemandeComponent {
  title = 'angular-print-example';

  printElement(elementId: string) {
    const printContents = document.getElementById(elementId)?.innerHTML;
    
    if (printContents) {
      const printWindow = window.open('', '', 'height=600,width=800');
      
      if (printWindow) {
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('<style>');
        printWindow.document.write('h3, h4 { text-align: center; color:blue }');
        printWindow.document.write('</head><body>');
        printWindow.document.write('</style>');
        printWindow.document.write('<hr> <hr>');
        printWindow.document.write('<br> <br> <br> <br> <br> <br>');
        printWindow.document.write(printContents);
        printWindow.document.write('</body></html>');
        printWindow.print();
        printWindow.document.close();

    }
    }}}
