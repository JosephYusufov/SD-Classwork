from pymongo import MongoClient
client = MongoClient()

db = client.test
collection = db.posts
post_id = posts.insert_one(post).inserted_id
