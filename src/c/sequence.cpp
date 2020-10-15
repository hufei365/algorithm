#include <stdlib.h>
#include<stdio.h> 
#ifndef SEQUENCE_LINER_LIST_H
#define SEQUENCE_LINER_LIST_H

/*
    线性表的顺序实现
*/
#define LIST_INIT_SIZE 100  //初始分配量
#define LIST_INCREMENT 10   //增量
#define LIST_TYPE int       //存储类型

typedef struct strSequenceLinerList
{
    LIST_TYPE *elem;        //存储空间基址
    unsigned int length;    //当前长度
    unsigned int listSize;  //当前存储容量
}SequnceLinerList;

enum Status
{
    OK,
    FAILED,
    OVERFLOW
};

/* 线性表初始化 */
Status initSequenceLinerList(SequnceLinerList& list)
{
    list.elem = (LIST_TYPE *)malloc(sizeof(LIST_TYPE)*LIST_INIT_SIZE);
    if (!list.elem)
    {
        return OVERFLOW;
    }
    list.length = 0;
    list.listSize = LIST_INIT_SIZE;
    return OK;
}

/* 扩展 */
Status resizeSequenceLinerList(SequnceLinerList& list)
{
    printf("Resize...\n");
    list.elem = (LIST_TYPE*)realloc(list.elem, sizeof(LIST_TYPE)*(list.listSize + LIST_INCREMENT));
    if (!list.elem)
    {
        return OVERFLOW;
    }
    list.listSize += LIST_INCREMENT;
    return OK;
}

/* 打印 */
void printSequnceLinerList(SequnceLinerList& list)
{
    printf("Begin print list...\n");
    printf("length=%d,listSize=%d.\n",list.length,list.listSize);
    unsigned int i = 0;
    for (; i < list.length-1;++i)
    {
        printf("%d,",list.elem[i]);
    }
    printf("%d\n", list.elem[i]);
    printf("End print list.\n");
}

/* 线性表插入:position表示插入的位置，从1开始。第一个元素是list.elem[0] */
Status insertSequenceLinerList(SequnceLinerList& list, unsigned int position, LIST_TYPE value)
{
    if (position<1 || position>list.length+1)
    {
        return FAILED;
    }
    if (list.length >= list.listSize)
    {
        Status res = resizeSequenceLinerList(list);
        if (OK != res)
        {
            return FAILED;
        }
    }

    LIST_TYPE* p = &list.elem[position -1];
    LIST_TYPE* q = &list.elem[list.length];
    for (; p != q; --q)
    {
        *(p + 1) = *p;
    }
    list.length++;
    *p = value;
    return OK;
}

/* 删除元素 */
Status deleteSequenceLinerList(SequnceLinerList& list, unsigned int position)
{
    if (position<1 || position>list.length)
    {
        return FAILED;
    }

    LIST_TYPE* p = &list.elem[position - 1];
    LIST_TYPE* q = &list.elem[list.length - 1];
    for (; p != q; ++p)
    {
        *p = *(p+1);
    }
    --list.length;
    return OK;
}

/* 查找：第一个值的下标 */
unsigned int findSequenceLinerList(SequnceLinerList& list, int value)
{
    for (unsigned int i = 0; i < list.length;++i)
    {
        if (value == list.elem[i])
        {
            return i;
        }
    }
    return -1;
}

/* 排序(冒泡) */
void sortSequeceLinerList(SequnceLinerList& list)
{
    unsigned int i = 0;
    unsigned int j = 0;
    for (; i < list.length-1;++i)
    {
        for (j = i + 1; j < list.length; ++j)
        {
            if (list.elem[i]>list.elem[j])
            {
                LIST_TYPE tmp = list.elem[i];
                list.elem[i] = list.elem[j];
                list.elem[j] = tmp;
            }
        }
    }
}

/* 销毁 */
void destroySequenceLincerList(SequnceLinerList& list)
{
    delete list.elem;
    list.elem = NULL;
}

#endif