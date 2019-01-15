const GoogleSearch = require ('../pages/google_search');

describe('dado que acessei a pagina inicial do Google', () =>{
    
    const google_search = new GoogleSearch();
    //  browser.get(google_search.path);
    browser.get('https://www.google.com.br/');

    it('Quando digito algum texto', () =>{
        google_search.with('Tubarão-martelo');
    })

    it('Entao visualizo sua descricao', () =>{
        expect(google_search.txtBusca.getText()).toEqual(('Tubarão-martelo'));
    })
})