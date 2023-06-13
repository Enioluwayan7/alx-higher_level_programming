#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    if not matrix:
        print()
    else:
        for rows in range(len(matrix)):
            for item in range(len(matrix[rows])):
                if item != len(matrix[rows]) - 1:
                    endspace = ' '
                else:
                    endspace = ''
                print("{:d}".format(matrix[rows][item]), end=endspace)
            print()

