#!/usr/bin/python3
class square:
    def __init__(self, size=0):

        if not isinstance(size, int):
            raise TypeError:
                print("size must be an integer")
        elif size < 0:
            raise ValueError:
                print("size must be >= 0")
        self._size = size

    def area(self):
        return (self.__size * self.__size)
