// Section: MongoDB Cmds
window.SECTIONS_DATA = window.SECTIONS_DATA || {};
window.SECTIONS_DATA['mongodb-cmds'] = {
    "title":  "MongoDB Cmds",
    "cards":  [
                  {
                      "code":  "show dbs",
                      "title":  "1. Show Databases"
                  },
                  {
                      "code":  "use college",
                      "title":  "2. Use Database"
                  },
                  {
                      "code":  "db.createCollection(\"students\")",
                      "title":  "3. Create Collection"
                  },
                  {
                      "code":  "db.students.insertOne({\r\n  name: \"Pavan B C\",\r\n  rgno: \"197CS24020\",\r\n  age: 22\r\n})",
                      "title":  "4. Insert One Document"
                  },
                  {
                      "code":  "db.students.insertMany([\r\n  { name: \"Nithish K\", rgno: \"197CS54021\", age: 18 },\r\n  { name: \"Goutham E\", rgno: \"197CS2408\", age: 21 }\r\n])",
                      "title":  "5. Insert Many Documents"
                  },
                  {
                      "code":  "db.students.find();",
                      "title":  "6. Find All Documents"
                  },
                  {
                      "code":  "db.students.find({ rgno: \"197CS24020\" });",
                      "title":  "7. Find by rgno"
                  },
                  {
                      "code":  "db.students.find({ age: 18 });",
                      "title":  "8. Find by Age"
                  },
                  {
                      "code":  "db.students.updateOne(\r\n  { name: \"Goutham E\" },\r\n  { $set: { rgno: \"197CS24080\" } }\r\n);",
                      "title":  "9. Update One Document"
                  },
                  {
                      "code":  "db.students.find({ rgno: \"197CS24080\" });",
                      "title":  "10. Find Updated Document"
                  },
                  {
                      "code":  "db.students.createIndex({ age: 1 });\r\ndb.students.createIndex({ name: 1 });",
                      "title":  "11. Create Index (Age \u0026 Name)"
                  },
                  {
                      "code":  "db.students.find({ rgno: \"197CS24080\" });",
                      "title":  "12. Find Data Using Index"
                  },
                  {
                      "code":  "db.students.find({ age: { $eq: 18 } });",
                      "title":  "13. Find Age Exactly 18 ($eq)"
                  },
                  {
                      "code":  "db.students.find({ age: { $gt: 20 } });",
                      "title":  "14. Find Age Greater Than 20 ($gt)"
                  },
                  {
                      "code":  "db.students.find({ age: { $lt: 21 } });",
                      "title":  "15. Find Age Less Than 21 ($lt)"
                  },
                  {
                      "code":  "db.students.find({ age: { $gte: 18, $lte: 21 } });",
                      "title":  "16. Find Age Between 18 and 21 ($gte, $lte)"
                  },
                  {
                      "code":  "db.students.find({ age: { $gte: 18, $lte: 21 } }).sort({ age: -1 }).limit(2);",
                      "title":  "17. Filter, Sort and Limit"
                  },
                  {
                      "code":  "db.students.find().sort({ age: 1 });",
                      "title":  "18. Sort Youngest to Oldest"
                  },
                  {
                      "code":  "db.students.find().sort({ name: 1 });",
                      "title":  "19. Sort Alphabetically (A-Z)"
                  },
                  {
                      "code":  "db.students.find().sort({ age: -1 });",
                      "title":  "20. Sort Oldest to Youngest"
                  },
                  {
                      "code":  "db.students.find().limit(3);",
                      "title":  "21. Set Limit (First 3)"
                  },
                  {
                      "code":  "db.students.deleteOne({ rgno: \"197CS54021\" });",
                      "title":  "22. Delete One Document"
                  },
                  {
                      "code":  "db.students.find({ rgno: \"197CS54021\" });",
                      "title":  "23. Verify Deletion"
                  },
                  {
                      "code":  "db.students.find();",
                      "title":  "24. Find All (After Delete)"
                  },
                  {
                      "code":  "db.students.drop();",
                      "title":  "25. Drop Collection"
                  },
                  {
                      "code":  "db.dropDatabase();",
                      "title":  "26. Drop Database"
                  }
              ],
    "id":  "mongodb-cmds",
    "pageTitle":  "MongoDB Commands"
};
