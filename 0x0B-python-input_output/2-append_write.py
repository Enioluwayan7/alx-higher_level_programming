#!/usr/bin/python3
"""Defines a file-writing function"""


def append_write(filename="", text=""):
    """Write a function that appends a string at the end of a text file (UTF8)


    ARGS:
        filename (str): The name of the file to write on.
        text (str): The text to write to the file
    Returns:
        The number of characters added.
    """
    with open(filename, "a", encoding="utf-8") as f:
        return f.write(text)
