#include <stdio.h>
#include <string.h>.
#include <cmath>

static enum  {
        OK,
        ERROR
} STATUS;

typedef struct tagNode
{
    char *pItem;
    struct tagNode *pNext;
} *pNode;


void KMP(char subject[], char pattern[]){

    int len = strlen(pattern);
    int pm[len];

    for(int i = 0; i < len; i++){
        int maxNum = 0;
        for( int j = 0; j <= i; j++){
            int maxNum = 0;
            for( int k = 0; k < j; k++ ){
                if( pattern[k] == pattern[j-k]){
                    maxNum++;
                }
            }
            maxNum = max()
            if(pattern[j] == pattern[i - j - 1]){
                maxNum++;
            } else {}
        }
        pm[i] = maxNum;
    }
    printf("pm is : \n");
    for( int i = 0; i < len; i++){
        printf( "%d", pm[i]);
    }



}

int main()
{
    
    int a = 1;
    printf("Hello World \n%d %i\n", a, ERROR);

    printf("\nsizeof int : %d", sizeof(int));
    printf("\nsizeof char : %d", sizeof(char));
    printf("\nsizeof long int : %d", sizeof(long int));
    printf("\nsizeof pNode : %d", sizeof(pNode));

    printf("\n");
    char s[] = "abcac";


    KMP(s, s);
    return 0;
}