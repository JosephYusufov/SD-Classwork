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
select_courses_frag = "SELECT mark FROM courses WHERE courses.id = %s;" 
# print_courses = "SELECT * FROM courses;"

students_toprint = c.execute(print_student)

for member in students_toprint:
    print("---")
    # print(member[2])
    query = select_courses_frag % str(member[2])
    print(c.execute(query))
    print("---")


# print(course_selection_script)

# courses_toprint = c.execute(print_courses)
# for member in courses_toprint:
#     print(member)
