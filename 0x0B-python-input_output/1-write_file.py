#!/usr/bin/python3
"""Defines a text reading function"""


def write_file(filename="", text=""):
    """ writes a string to a text file (UTF8).


    Args:
        filename (str): the name of file to be written on.
        text (str): The text to write a file.
    Returns:
        Number of character written.
    """
    with open(filename, "w", encoding="utf-8") as f:
        return f.write(text)
