#!/usr/bin/python3
"""defines a square class."""
from models.rectangle import Rectangle

"""class Square that inherit from Rectangle"""
class Square(Rectangle):

    def __init__(self, size, x=0, y=0, id=None):
        """Initialize a Square.

        Args:
            size(int): The size of the square.
            x(int): The x co-ordinate of the square.
            y(int): The y co-ordinate of the square.
            id(int): Identity of the square
        """

        super().__init__(size, size, x, y, id)

    @property
    def size(self):
        """Get the size of the square"""
        return self.width

    @size.setter
    def size(self, value):
        self.width = value
        self.heigt = value

    def update(self, *args, **kwargs):
        """Update the square

        Args:
            *args: List of arguments.
            -1st argument is id attribute.
            -2nd argument is size attribute.
            -3rd argument is x attribute.
            -4th argument is y attribute.
            **kwargs (dict): New value pairs of attributes.
        """

        if args and len(args) != 0:
            a = 0
            for arg in args:
                if a == 0:
                    if arg is None:
                        self.__init__(self.size, self.x, self.y)
                    else:
                        self.id = ar
                elif a == 1:
                    self.size = arg
                elif a == 2:
                    self.x = arg
                elif a == 3:
                    self.y = arg
                a += 1


        elif kwargs and len(kwargs) != 0:
            for k, v in kwargs.items():
                if k == "id":
                    if v is None:
                        self.__init__(self.size, self.x, self.y)
                    else:
                        self.id = v
                elif k == "size":
                    self.size = v
                elif k == "x":
                    self.x = v
                elif k == "y":
                    self.y = v

