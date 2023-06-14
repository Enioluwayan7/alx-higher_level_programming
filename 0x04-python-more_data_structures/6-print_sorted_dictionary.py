#!/usr/bin/python3
def print_sorted_dictionary(a_dictionary):
    ordered_key = list(a_dictionary.keys())
    ordered_key.sort()
    for j in ordered_key:
        print("{}:{}".format(j, a_dictionary.get(j)))
