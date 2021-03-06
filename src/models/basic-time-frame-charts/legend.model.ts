export class Legend {
  title: string;
  htmlLineId: string;
  htmlAreaId: string;
  htmlChbxLineId: string;
  htmlChbxAreaId: string;

  constructor(chartType: string, key: string) {
    this.title = '';
    this.htmlLineId = `${chartType}-${key}-line`;
    this.htmlAreaId = `${chartType}-${key}-area`;
    this.htmlChbxLineId = `${chartType}-${key}-line_chbx`;
    this.htmlChbxAreaId = `${chartType}-${key}-area_chbx`;
  }
}
