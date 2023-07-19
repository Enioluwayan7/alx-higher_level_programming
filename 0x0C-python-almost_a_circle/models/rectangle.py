#!/usr/bin/python3
"""defines Rectangle class."""
from models import Base

class rectangle(Base):
    """Represents Rectangle class."""
    def __init__(self, width, height, x=0, y=0, id=None):
        self.width = width
        self.height = height
        self.x = x
        self.y = y
        super().__init__(id)


    @property
    def width(self):
        """get the width of the Rectangle"""
        return self.__width

    @width_setter
    def width(self, value):
        if type(value) != int:
            raise TypeError("width must be an integer")
        if width <= 0:
            raise ValueError("width must be > 0")
        self.__width = value

    @property
    def height(self):
        """get the height of Rectangle."""
        return self.__height

    @height_setter
    def height(self, value):
        if type(value) != int:
            raise TypeError("height must be an integer")
        if height <= 0:
            raise ValueError("height must be > 0")
        self.__height = value

    @property
    def x(self):
        """get the x co-ordinate of the Rectangle."""
        return self.__x

    @x_setter
    def x(self, value):
        if type(value) != int:
            raise TypeError("x must be an integer")
        if x < 0:
            raise ValueError("x must be >=")
        self.__x = value

    @property
    def y(self):
        """get the y co_ordinate of Rectangle."""
        return self.__y

    @y_setter
    def y(self, value):
        if type(value) != int:
            raise TypeError("y must be an integer")
        if y < 0:
            raise ValueError("y must be >= 0")
        self.__y = value

    def area(self):
        """Public method that returns area value of rectangle instance."""
        return self.width * self.height

    def display(Self):
        """prints in stdout the Rectangle instance with the character #."""
        if self.width == 0 or self.height == 0:
            print("")
            return

        [print("") for y in range(self.y)]
        for h in range(self.height):
            [print(" ", end="") for x in range(self.x)]
            [print("#", end="") for w in range(self.width)]
            print("")

    def update(self, *args, **kwargs):
        """update class Rectangle.

        Args:

        *args(int): New value attribute.
        - 1st argument is the id attribute
        - 2nd argument is the width attribute
        - 3rd argument is the height attribute
        - 4th argument is the x attribute
        - 5th argument i sthe y attribute
        **kwargs(dict): New key of attributes.
        """

        if args and len(args) != 0:
            a = 0
            for arg in args:
                if a == 0:
                    if arg is None:
                        self.__init__(self.width, self.height, self.x, self.y)
                    else:
                        self.id = arg
                    elif a == 1:
                        self.width = arg
                    elif a == 2:
                        self.height = arg
                    elif a == 3:
                        self.x = arg
                    elif a == 4:
                        self.y = arg
                    a += 1

        elif kwargs and len(kwargs) != 0:
            for k, v in kwargs.items():
                if k == "id":
                    if v is None:
                        self.__init__(self.width, self.height, self.x, self.y)
                    else:
                        self.id = v
                elif k == "width":
                    self.width = v
                elif k == "height":
                    self.height = v
                elif k == "x":
                    self.x = v
                elif k == "y":
                    self.y = v

    def to_dictionary(self):
        """Return the dictionary representation of a Rectangle."""
        return {
            "id": self.id,
            "width": self.width,
            "height": self.height,
            "x": self.x,
            "y": self.y
        }

    def __str__(self):
        """Return the print() and str() representation of the Rectangle."""
        return "[Rectangle] ({}) {}/{} - {}/{}".format(self.id,
                                                       self.x, self.y,
                                                       self.width, self.height)
