import { LocaleHelper } from './LocaleHelper';
import messages_en from '../lang/en.json';
import messages_fr from '../lang/fr.json';
import messages_te from '../lang/te.json';

// Add languge support here..: We can still enhance loading the values from DB or Using the single file to load the translations.
// We can check based no of values that is used.
const messages = new Map();
messages.set('en', messages_en);
messages.set('fr', messages_fr);
messages.set('te', messages_te);

/**
 * Helper utility to provide support for i18n.
 */
export class I18NHelper {
  /**
   * Get default messages to Ract Intl.
   */
  public static getMessages() {
    const defaultLanguageCode: string = LocaleHelper.getUserLangugeCode();
    if (defaultLanguageCode && messages.has(defaultLanguageCode)) {
      return messages.get(defaultLanguageCode);
    }
    console.log('fallback with default language..', LocaleHelper.defaultLanguageCode());
    return messages.get(LocaleHelper.defaultLanguageCode());
  }

  /**
   * Get i18n messages by user locale..
   */
  public static getMessagesByLanguageCode(languageCode: string) {
    if (languageCode && messages.has(languageCode)) {
      return messages.get(languageCode);
    }
    console.log('fallback with default language..');
    return messages.get(LocaleHelper.defaultLanguageCode());
  }
}
