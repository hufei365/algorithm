#include <stdio.h>
#include <string.h>
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


    return 0;
}