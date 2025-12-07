// handler.js
const AWS = require('aws-sdk')
const s3 = new AWS.S3()
exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello, world!' })
  }
}

// exports.updateLastModified = async (event) => {
//   const bucketName = event.Records[0].s3.bucket.name;

//   //Add a custom metadata entry with the current timestamp
//   const params = {
//     Bucket: bucketName,
//     Key: 'timestamp',
//     Body: 'Last Modified timestamp',
//     MetaData: {
//       'last-uploaded': new Date().toISOString(),
//     },
//   };

//   await s3.putObject(params).promise();
//   console.log(`Updated last-updated metadata for bucket: ${bucketName}`);
// };

// exports.cleanupInacticityBuckets = async () => {
//   const date = new Date();
//   const gap = new Date(now.getTime() - 24 * 60 * 60 * 1000);
//   const bucketName = process.env.BUCKET_NAME;
//   try {
//     const metadata = await s3
//       .headObject({
//         bucket: bucketName,
//         Key: 'timestamp',
//       })
//       .promise(); // The HEAD operation retrieves metadata from an object without returning the object itself. This operation is useful if you're interested only in an object's metadata.
//     const lastUpdated = new Date(metadata.Metadata['last-updated']);

//     if (gap < lastUpdated) {
//       console.log(`Bucket ${bucketName} is still activ`);
//     } else {
//       console.log(`Bucket ${bucketName} is inactive. Deleting...`);
//       await emptyAndDeleteBucket(bucketName);
//     }
//   } catch (error) {
//     console.log(
//       `Error accessing metadata for bucket ${bucketName}: ${error.message}`
//     );
//   }
// };

// async function emptyAndDeleteBucket(bucketName) {
//   const listedObjects = await s3
//     .listObjectsV2({ Bucket: bucketName })
//     .promise();

//   if (listedObjects.Contents.length === 0) {
//     await s3.deleteBucket({ Bucket: bucketName }).promise();
//     console.log(`Bucket ${bucketName} is deleted.`);
//     return;
//   }

//   const deleteParams = {
//     Bucket: bucketName,
//     Key: { Objects: [] },
//   };
//   listedObjects.Contents.forEach(({ Key }) => {
//     deleteParams.Delete.Objects.push({ Key });
//   });

//   await s3.deleteObjects(deleteParams).promise();
//   if (listedObjects.IsTruncated) {
//     await emptyAndDeleteBucket(bucketName);
//   } else {
//     await s3.deleteBucket({ Bucket: bucketName }).promise();
//     console.log(`Bucket ${bucketName} deleted.`);
//   }
// }
