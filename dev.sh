# docker run --name mongo \
#       -p 27017:27017 \
#       -e MONGO_INITDB_ROOT_USERNAME="mongou" \
#       -e MONGO_INITDB_ROOT_PASSWORD="mongop" \
#       -d prismagraphql/mongo-single-replica:5.0.3