Syntax:

# use DATABASE_NAME
# show dbs
# db.dropDatabase()
# db.createCollection(name, options)
# db.createCollection(<name>, { capped: <boolean>(value can be 1 or true and vice-versa 0 or false),
                              autoIndexId: <boolean>,
                              size: <number>,
                              max: <number>,
                              storageEngine(WiredTiger): <document>,
                              usePowerOf2Sizes(MMAPv1): <boolean>,
                              noPadding(MMAPv1): <boolean> } )
# db.COLLECTION_NAME.drop()
# db.runCommand( { dropAllUsersFromDatabase: 1, writeConcern: { w: "majority" } } )
# db.COLLECTION_NAME.insert(document)
# db.collection.insert(
   <document or array of document>,
   {
     writeConcern: <document>,
     ordered: <boolean>,

   }
)
# db.COLLECTION_NAME.find()
# db.COLLECTION_NAME.find().pretty()
# db.collection.find(query(document), projection)
# db.collection.find({field: value}, { field1: <boolean>, field2: <boolean> ... })
# db.collection.find({field: value}, { field1: <boolean>, field2: <boolean> ... }).sort({field1: 1 or -1, field2: 1 or -1 ...})
# db.collection.find({field: value}, { field1: <boolean>, field2: <boolean> ... }).sort({field1: 1 or -1, field2: 1 or -1 ...}).limit(number)
# db.collection.find({field: value}, { field1: <boolean>, field2: <boolean> ... }).limit(number).sort({field1: 1 or -1, field2: 1 or -1 ...})
# db.COLLECTION_NAME.find(
   {
      $or: [
	     {key1: value1}, {key2:value2}
      ]
   }
).pretty()
# db.COLLECTION_NAME.find(
   {
      $and: [
	     {key1: value1}, {key2:value2}
      ]
   }
).pretty()
# db.COLLECTION_NAME.find(
   {
      
	     {key1: value1}, {key2:value2}
     
   }
).pretty()
# db.COLLECTION_NAME.remove(DELLETION_CRITTERIA)
# db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>
   }
)
# db.COLLECTION_NAME.ensureIndex({KEY:1})
# db.collection.ensureIndex(keys, options)
# db.collection.createIndex() || Deprecated since version 3.0.0
# db.collection.getIndexes() to view the specifications of existing indexes for a collection.
# db.collection.explain("verbosity mode"<Optional>).<method(...)> || New in version 3.0.
  The behavior of db.collection.explain() and the amount of information returned depend on the verbosity mode.
# verbosity mode : Optional. Specifies the verbosity mode for the explain output. 
  The mode affects the behavior of explain() and determines the amount of information to return.
  The possible modes are: "queryPlanner", "executionStats", and "allPlansExecution".
  Default mode is "queryPlanner".
# Returns information on the query plan for the following operations: aggregate(); count(); find(); group(); remove(); and update() methods.
# db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
# db.collection.aggregate(pipeline, options(optional))
# db.collection.aggregate([{},{}..], {})
# db.collection.aggregate([{$project:<document>},{$match:<document>},{$group:<document>},{$sort:<document>},{$skip:<document>},{$limit:<document>},{$unwind:<document>},{$out:<document>},{$redact:<document>},{$geonear:<document>}], {explain:<boolean>}{allowDiskUse:<boolean>},{cursor:<document>})
# db.orders.aggregate([
                     { $match: { status: "A" } },
                     { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
                     { $sort: { total: -1 } }
                   ])
# mongod --port "PORT" --dbpath "YOUR_DB_DATA_PATH" --replSet "REPLICA_SET_INSTANCE_NAME"
# rs.initiate()
# rs.conf()
# rs.status()
# rs.add(HOST_NAME:PORT)
# db.isMaster()
# Horizontal scaling || Vertical scaling
# Sharded cluster has the following components: shards, query routers and config servers.
# mongodump
# mongos
# mongostat
# mongotop
# bsondump
# bsondump collection.bson > collection.json
# mongoexport
# mongoimport
# Avoid using mongoimport and mongoexport for full instance production backups. 
  They do not reliably preserve all rich BSON data types, 
  because JSON can only represent a subset of the types supported by BSON. 
  Use mongodump and mongorestore as described in MongoDB Backup Methods for this kind of functionality.
# mongofiles
# mongofiles <options> <commands> <filename>
# mongooplog
# mongooplog  --from mongodb0.example.net --host mongodb1.example.net
# mongoperf : check disk I/O performance independently of MongoDB
# 
# 
# 
# 
# 
# 
# 