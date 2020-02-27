from pymongo import MongoClient
from pprint import pprint
import datetime
import json
client = MongoClient()
db = client.test
restaurants = db.restaurants


with open("./primer-dataset.json", 'r') as file:
    result = restaurants.insert_many(file)
        # pprint(data)

# post = {"author": "Mike",
#         "text": "My first blog post!",
#         "tags": ["mongodb", "python", "pymongo"],
#         "date": datetime.datetime.utcnow()}

print(result)
# pprint(posts.find_one())
