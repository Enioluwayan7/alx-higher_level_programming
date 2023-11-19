#!/usr/bin/python3
"""lists all State objects from the database hbtn_0e_6_usa"""

import sys
from model_state import Base, State
from SQLAlchemy import (create_engine)


if __name__ == "__main__":
    engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}' 
            .format(sys.argv[1], sys.argv[2], sys.argv[3]))
    base.metadata.createall(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    for instance in sesson.query(State).order_by(State.id):
        print(instance.id, instance.name, sep=": ")
