# -JS-Validatore-Codice-Fiscale-Italiano
LIBRERIA JAVASCRIPT PER IL CONTROLLO DI PARITA' DEL CODICE FISCALE

La libreria implementa l'algoritmo di validazione descritto su wikipedia
(https://it.wikipedia.org/wiki/Codice_fiscale#Generazione_del_codice_fiscale)
La libreria permette quindi il calcolo di parità tra l'ultima lettera del
codice fiscale e tutte le altre 15 precedenti restituendo un true|false.

Non controlla il formato del codice fiscale, ammette solo una stringa da
alfanumerica da 16 caratteri.



Esempi di utilizzo:
if(CFvalidator('HCGDST35S52I056B'))  //controlla il codice e restituisce T o F
{
  alert("Codice Fiscale Valido!");  //se T genera un alert
}

Spero che la libreria vi sia utile.
