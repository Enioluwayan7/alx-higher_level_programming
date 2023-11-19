#!/usr/bin/python3
""" lists all states from the database hbtn_0e_0_usa """

import MySQLdb
import sys
def list_state(username, password, database):
    """ 
    List all state from the database hbtn_0e_0_usa.
    args: 
        username: mysql username
        password: mysql password
        db name: mysql database
    """

    #connect to mysql server
    db = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password,
            db=database)
    cursor = db.cursor()

    #Execute the SQL query in fetching all states
    cursor.execute("SELECT * FROM states ORDER BY id ASC")

    #FETCH ALL THE ROW FROM THE QUERY RESULT
    rows = cursor.fetchall()
    for row in rows:
        print(row)
    cur.close()
    db.close()

     if __name__ == "__main__":
          username = sys.argv[1]
        password = sys.argv[2]
        database = sys.argv[3]

        list_states(username, password, database)

