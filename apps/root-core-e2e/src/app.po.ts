import { browser, by, element } from 'protractor';

export class AppPage {
    public navigateTo() {
        return browser.get('/');
    }

    public getParagraphText() {
        return element(by.css('.app__footer p')).getText();
    }
}
