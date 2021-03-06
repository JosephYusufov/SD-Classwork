#Joseph Yusufov, With a skeleton provided by Mr. Mykolyk
#SoftDev
#skeleton :: SQLITE3 BASICS
#Oct 10 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

STUDENTS = {} # Dictionary to hold a dictionary for each student
COURSES = {}  # Dictionary to hold a dictionary for each course

DB_FILE = "discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops


# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >

insert_data_student = ""
with open('students.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        insert_data_student += "INSERT INTO student VALUES('" + row['name'] + "'," + row['age'] + ", " + row['id'] + ");\n"
print(insert_data_student)


insert_data_courses = ""
with open('courses.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        insert_data_courses += "INSERT INTO courses VALUES('" + row['code'] + "'," + row['mark'] + ", " + row['id'] + ");\n"
print(insert_data_courses)

#==========================================================

# test SQL stmt in sqlite3 shell, save as string
create_student = "CREATE TABLE student( name TEXT, age INTEGER, student_id INTEGER PRIMARY KEY);"
create_courses = "CREATE TABLE courses( code TEXT, mark INTEGER, course_id INTEGER );"
c.executescript(create_student)    # run SQL statement
c.executescript(insert_data_student)    # run SQL statement
c.executescript(create_courses)    # run SQL statement
c.executescript(insert_data_courses)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database
