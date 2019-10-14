#Joseph Yusufov, Hillary Zen, With a skeleton provided by Mr. Mykolyk
#SoftDev
#skeleton :: SQLITE3 BASICS
#Oct 11 2019

import sqlite3  # enable control of an sqlite database
import csv  # facilitate CSV I/O

DB_FILE = "discobandit.db"

db = sqlite3.connect(DB_FILE)  # open if file exists, otherwise create
c = db.cursor()  # facilitate db ops
print_student = "SELECT * FROM student;"
select_courses_frag = "SELECT mark FROM courses, student WHERE courses.id = %s;" 
# print_courses = "SELECT * FROM courses;"

c.execute(print_student)
row = c.fetchone()
while row is not None:
    print("---")
    id_str = row[2]
    courses = c.execute(select_courses_frag % id_str)
    print(courses)
    print("---")
    row = c.fetchone()


# print(course_selection_script)

# courses_toprint = c.execute(print_courses)
# for member in courses_toprint:
#     print(member)
