#!/usr/bin/python3
def uniq_add(my_list=[]):
    uniq_int = set(my_list)
    num = 0

    for j in uniq_int:
        num += j
    return (num)
