function CFvalidator(CF)
{
    //tabella di codifica dei numeri pari
    var evenChar={'0':0, '1':1, '2':2, 
                 '3':3, '4':4, '5':5, 
                 '6':6, '7':7, '8':8, 
                 '9':9, 'A':0, 'B':1, 
                 'C':2, 'D':3, 'E':4, 
                 'F':5, 'G':6, 'H':7, 
                 'I':8, 'J':9, 'K':10, 
                 'L':11, 'M':12, 'N':13, 
                 'O':14, 'P':15, 'Q':16, 
                 'R':17, 'S':18, 'T':19, 
                 'U':20, 'V':21, 'W':22, 
                 'X':23, 'Y':24, 'Z':25};
    //tabella di codifica dei numeri dispari
    var oddChar={ '0':1, '1':0, '2':5, 
                 '3':7, '4':9, '5':13, 
                 '6':15, '7':17, '8':19, 
                 '9':21, 'A':1, 'B':0, 
                 'C':5, 'D':7, 'E':9, 
                 'F':13, 'G':15, 'H':17, 
                 'I':19, 'J':21, 'K':2, 
                 'L':4, 'M':18, 'N':20, 
                 'O':11, 'P':3, 'Q':6, 
                 'R':8, 'S':12, 'T':14, 
                 'U':16, 'V':10, 'W':22, 
                 'X':25, 'Y':24, 'Z':23};
    //tabella di codifica dei resti
    var oddment={ 'A':0, 'B':1, 
         'C':2, 'D':3, 'E':4, 
         'F':5, 'G':6, 'H':7, 
         'I':8, 'J':9, 'K':10, 
         'L':11, 'M':12, 'N':13, 
         'O':14, 'P':15, 'Q':16, 
         'R':17, 'S':18, 'T':19, 
         'U':20, 'V':21, 'W':22, 
         'X':23, 'Y':24, 'Z':25};
    
    //split della stringa CF
    var splittedCF=CF.split('');
    
    //inizializzazioni variabili di sommatoria
    var even=0; //pari
    var odd=0; //dispari
    
    for(var i=0; i<splittedCF.length; i++)
        {
            //rendo tutto maiuscolo
            splittedCF[i]=splittedCF[i].toUpperCase();
            /*il comando dichiara di entrare solo se l'indice è pari, 
            ma nella realtà indica i dispari dell'algoritmo di parità CF
            poichè si partela numerazione dei caratteri da 1 e non da 0*/
            if(i%2==0)
                {
                    odd+=oddChar[splittedCF[i]];
                }
            if(i%2==1 && i!=15)
                {
                    even+=evenChar[splittedCF[i]];
                }
        }
        //sommo i valori delle sommatorie delle tabelle dispari e pari
        var result=even+odd;

        //calcolo il resto della divisione su 26
        result=result%26;

        //estrapolo il valore dal codice fiscale immesso
        var validate=oddment[splittedCF[15]];

        //controllo di validità finale
        if(result==validate)
            {
                return true;
            }
        else
            {
                return false;
            }
}