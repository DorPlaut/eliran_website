import translate from '@vitalets/google-translate-api';

export async function translateHebrewToEnglish(text) {
  try {
    const translatedText = await translate('שלום', { from: 'he', to: 'en' });
    console.log(translatedText);
    return translatedText.text;
  } catch (err) {
    console.error(err);
    return text;
  }
}
