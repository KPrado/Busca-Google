class GoogleSearch{
    constructor(){
        this.path = '/imghp?hl=pt-BR&tab=wi';
        this.buscaGoogle = element(by.css('input[name=q]'));
        this.txtBusca = element(by.css('div[data-local-attribute=d3bn]'));
    }
    with(busca){
        this.buscaGoogle.sendKeys(busca);
        this.buscaGoogle.sendKeys(protractor.Key.ENTER);
    }
}
module.exports = GoogleSearch;