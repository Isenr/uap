import { browser, by, element } from 'protractor';

export class AppPage {
    public navigateTo() {
        return browser.get('/');
    }

    public getParagraphText() {
        return element(by.css('uap-root h1')).getText();
    }
}
